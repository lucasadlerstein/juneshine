/** @jsx jsx */
import { useContext } from 'react'
import { jsx, Box, Styled, Flex, Grid, Button } from 'theme-ui'
import { useState, useEffect } from 'react'
import { StoreContext } from '../../context'
import LineItem from './LineItem'

import '../../styles/modal.css'

export const CartModal = () => {
  const [originalPrice, setOriginalPrice] = useState(0)
  const [discounted, showDiscounted] = useState(false)

  const {
    removeLineItem,
    store: { checkout, showCart },
    toggleCart,
    addDiscount,
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  // useEffect(() => {
  //   if (checkout.id && checkout.lineItems.length > 0) {
  //     addDiscount(discount)
  //   }
  // },[checkout.id])

  useEffect(() => {
    if (checkout.lineItems.length > 0) {
      showDiscounted(true)
      let total = 0
      checkout.lineItems.forEach((item) => {
        total += parseFloat(item.variant.price) * item.quantity
      })
      setOriginalPrice(total)
    } else {
      showDiscounted(false)
    }
  }, [checkout.lineItems])

  const lineItemIds = checkout.lineItems.map((item) => item.id)

  const line_items = checkout.lineItems.map((line_item) => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  const handleRemoveLineItems = () => {
    removeLineItem([...new Set(lineItemIds)])
  }

  return (
    <div>
      <div
        onClick={(e) => toggleCart(e, showCart)}
        className={showCart ? 'show-opaque' : 'hidden-opaque'}
      ></div>
      <Grid
        columns={[1]}
        sx={{
          gridTemplateRows: '50px auto 200px',
          backgroundColor: 'white',
          maxWidth: 'small',
          minWidth: '300px',
          boxShadow: 'large',
          height: '100%',
        }}
        className={showCart ? 'show-right' : 'hidden-right'}
      >
        <Flex
          sx={{
            backgroundColor: 'light',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 4,
            py: 2,
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Styled.a
            onClick={(e) => toggleCart(e, showCart)}
            sx={{ fontSize: '1.5rem' }}
          >
            <svg style={{ width: '16px' }} viewBox='0 0 16 16'>
              <path
                clipRule='evenodd'
                d='M15.78.22a.75.75 0 0 1 0 1.06L9.06 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L8 9.06l-6.72 6.72a.75.75 0 0 1-1.06-1.06L6.94 8 .22 1.28A.75.75 0 1 1 1.28.22L8 6.94 14.72.22a.75.75 0 0 1 1.06 0z'
                fillRule='evenodd'
              ></path>
            </svg>
          </Styled.a>
          <Styled.h6 sx={{ my: 0, py: 0 }}>Your Cart</Styled.h6>
        </Flex>
        <Box sx={{ py: 6, px: 5, overflowY: 'auto' }}>
          <Flex sx={{ alignItems: 'center' }}>
            <Styled.h6>Products</Styled.h6>
          </Flex>

          <Grid columns={[1]}>{line_items}</Grid>

          <Flex sx={{ justifyContent: 'flex-end', mt: 4 }}>
            <Styled.a onClick={handleRemoveLineItems} sx={{ fontSize: [0] }}>
              Clear Cart
            </Styled.a>
          </Flex>
        </Box>
        <Box
          sx={{
            backgroundColor: 'light',
            borderTop: '1px solid #e0e0e0',
            boxShadow: 'small',
            px: 5,
          }}
        >
          <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Styled.h5 sx={{ fontWeight: 'body' }}>Subtotal</Styled.h5>
            <Flex sx={{ alignItems: 'center' }}>
              {/* {discounted && (
                  <span sx={{fontWeight: "body", fontSize: "16px", color: "red", mr: 4, textDecoration: "line-through"}}>${originalPrice}</span>
                )} */}
              <Flex sx={{ fontWeight: 'heading' }}>
                ${' '}
                <span sx={{ fontSize: '1.5rem' }}>
                  {checkout.subtotalPrice}
                </span>
              </Flex>
            </Flex>
          </Flex>
          <Button
            onClick={handleCheckout}
            disabled={checkout.lineItems.length === 0}
            sx={{ width: '100%', my: 2 }}
          >
            Check out
          </Button>
          <small sx={{ fontSize: '10px', lineHeight: 0 }}>
            By checking out, I agree to the Terms of Use and acknowledge that I
            have read the Privacy Policy. Shipping and promotions calculated in
            checkout.
          </small>
        </Box>
      </Grid>
    </div>
  )
}
