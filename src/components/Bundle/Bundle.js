/** @jsx jsx */
import { jsx, Flex, Styled, Grid, Container } from "theme-ui"
import React, { useState, useEffect, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Sticky from 'react-sticky-el';

import { StoreContext } from '../../context'

import { Product, Confirm } from './'

const Bundle = ({ items, quantity, discount, heading, subheading }) => {
  const products = items
  const [selectedProducts, setSelectedProducts] = useState([])
  const { addVariantsToCart } = useContext(StoreContext)

  const addProduct = (id) => {
    setSelectedProducts([...selectedProducts, id])
  }

  const removeProduct = (id) => {
    const auxList = [...selectedProducts]
    const productIndex = auxList.indexOf(id)
    auxList.splice(productIndex, 1)
    setSelectedProducts(auxList)
  }

  const addToCart = () => {
    const variants = items.filter((item) =>
      selectedProducts.includes(item.variantId)
    )

    addVariantsToCart(variants, '')
  }

  return (
    <section id="products" name="products">
      <Container sx={{py: 6, width: ['100%','80%'], pb: [0,6]}}>
            <Styled.h2 sx={{textAlign: 'center', color: 'dark', width: '90%', mx: 'auto', textTransform: 'uppercase'}}>{heading}</Styled.h2>
            <Styled.p sx={{textAlign: 'center', color: 'dark', width: '60%', mx: 'auto', mb: 6, textTransform: 'uppercase'}}>{subheading}</Styled.p>
            <Grid className="block"  columns={[1,'2fr 1fr']} sx={{position: 'relative'}}>
                <div sx={{order: ['2','0'], my: [4,0]}}>
                  <Grid gap={'20px'} columns={[2,2,2,3]}>
                      {products.map((product, index) => (
                        <Product
                          key={product.variantId}
                          image={product.images}
                          description={product.description}
                          name={product.title}
                          subname={product.subtitle}
                          id={product.variantId}
                          quantity={
                            selectedProducts.filter(
                              (selected) => selected === product.variantId
                            ).length
                          }
                          addProduct={addProduct}
                          removeProduct={removeProduct}
                          isMaxReached={selectedProducts.length < quantity ? false : true}
                          badgeColor={product.badgeColor}
                          badgeText={product.badgeText}
                        />
                      ))}
                  </Grid>
                </div>
                <Sticky boundaryElement=".block" hideOnBoundaryHit={false} dontUpdateHolderHeightWhenSticky={true} >
                  <Confirm
                  products={selectedProducts.map((product) =>
                    items.find((item) => item.variantId === product)
                  )}
                  onClose={removeProduct}
                  quantity={quantity}
                  addToCart={addToCart}
                  discount={discount}
                />
                </Sticky>
                
            </Grid>
          </Container>
    </section>
    
    
  )
}

export default Bundle
