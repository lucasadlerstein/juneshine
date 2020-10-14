import React, { useState, useEffect } from 'react'
import Client from 'shopify-buy'

import { BundleContext } from '../context'

const client = Client.buildClient({
  storefrontAccessToken: `64e476892aa9edf69e9ba4fbecd331a6`,
  domain: `www.juneshine.com`,
  apiVersion: `2020-04`,
})

export const BundleProvider = ({ children }) => {
  let initialStoreState = {
    client,
    adding: false,
    showCart: false,
    showDrawer: false,
    checkout: { lineItems: [], subtotalPrice: '0.00' },
    products: [],
    shop: {},
  }

  const [store, updateStore] = useState(initialStoreState)

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== 'undefined'
      const existingCheckoutID = isBrowser
        ? localStorage.getItem('shopify_checkout_id')
        : null

      const setCheckoutInState = (checkout) => {
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id)
        }

        updateStore((prevState) => {
          return { ...prevState, checkout }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = (id) => store.client.checkout.fetch(id)

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID)
          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem('shopify_checkout_id', null)
        }
      }

      const newCheckout = await createNewCheckout()
      setCheckoutInState(newCheckout)
    }

    initializeCheckout()
  }, [store.client.checkout])

  return (
    <BundleContext.Provider
      value={{
        store,
        addVariantToCart: (variantId, quantity) => {
          if (variantId === '' || !quantity) {
            console.error('Both a size and quantity are required.')
            return
          }

          updateStore((prevState) => {
            return { ...prevState, adding: true }
          })

          const { checkout, client } = store

          const checkoutId = checkout.id
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ]

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then((checkout) => {
              updateStore((prevState) => {
                return { ...prevState, checkout, adding: false, showCart: true }
              })
            })
        },
        addVariantsToCart: (lineItems, discountCode) => {
          updateStore((prevState) => {
            return { ...prevState, adding: true }
          })

          const { checkout, client } = store

          const checkoutId = checkout.id

          return client.checkout
            .addLineItems(checkoutId, lineItems)
            .then((checkout) => {
              updateStore((prevState) => {
                return { ...prevState, checkout }
              })
              return client.checkout
                .addDiscount(checkoutId, discountCode)
                .then((checkout) => {
                  updateStore((prevState) => {
                    return {
                      ...prevState,
                      checkout,
                      adding: false,
                      showCart: true,
                    }
                  })
                })
            })
        },
        removeLineItem: (lineItems) => {
          const { client, checkout } = store

          const checkoutId = checkout.id

          return client.checkout
            .removeLineItems(checkoutId, lineItems)
            .then((res) => {
              updateStore((prevState) => {
                return { ...prevState, checkout: res }
              })
            })
        },
        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
          ]

          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then((res) => {
              updateStore((prevState) => {
                return { ...prevState, checkout: res }
              })
            })
        },
        addDiscount: (discountCode) => {
          const { checkout, client } = store

          const checkoutId = checkout.id

          return client.checkout
            .addDiscount(checkoutId, discountCode)
            .then((res) => {
              updateStore((prevState) => {
                return { ...prevState, checkout: res }
              })
            })
            .catch()
        },
        getProduct: (handle) => {
          client.product.fetchByHandle(handle).then((product) => {
            return product
          })
        },
        getProductById: async (productId) => {
          const product = await client.product.fetch(productId)
          return product
        },
        toggleCart: (e, value) => {
          e.preventDefault()
          updateStore((prevState) => {
            return { ...prevState, showCart: !value }
          })
        },
        toggleDrawer: (e, value) => {
          e.preventDefault()
          updateStore((prevState) => {
            return { ...prevState, showDrawer: !value }
          })
        },
      }}
    >
      {children}
    </BundleContext.Provider>
  )
}
