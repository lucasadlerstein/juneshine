/** @jsx jsx */
import { jsx, Flex, Styled, Button } from "theme-ui"
import React, { useContext } from 'react'
import Client from 'shopify-buy'
import { MdShoppingBasket, MdClose } from 'react-icons/md'

import AddToCart from './AddToBundle'


const Confirm = ({ products, onClose, quantity, addToCart, discount }) => {
  const isFull = products.length === quantity

  const ProductSelect = ({ product, count }) => {
    return (
      <div sx={{flexBasis: '33.33%', textAlign: 'center', mb: '15px'}}>
        {product ? (
          <div>
            <div sx={{height: ['100px','100px','110px'], width: ['80%', '100%'], position: 'relative', mb: '20px', mx: 'auto'}}>
              <div sx={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#000', color: '#ffffff', position: 'absolute',right: '0', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}} onClick={() => onClose(product.variantId)}>
                <MdClose size={15} />
              </div>
              <img src={product.images} sx={{width: ['70%', '80%']}} />
            </div>
            <div sx={{fontSize: '12px', color: 'dark', width: '90%', mx: 'auto', textAlign: 'center', fontWeight: '600', textTransform: 'uppercase', minHeight: '36px'}} dangerouslySetInnerHTML={{ __html: product.title }} />
          </div>
        ) : (
          <div>
            <div sx={{height: ['100px','100px','110px'], width: ['60%', '80px'], border: '2px solid #d8d6db', color: 'dark', display: 'flex', mb: '20px', alignItems: 'center', justifyContent: 'center', mx: 'auto'}}>
              {/* <MdShoppingBasket size={22} /> */}
              {count}
            </div>
            <div sx={{fontSize: '12px', color: 'dark', width: '90%', mx: 'auto', textAlign: 'center', fontWeight: '600', minHeight: '36px'}}> Flavor {count} </div>
          </div>
          
        )}
      </div>
    )
  }



  return (
    <div sx={{width: '100%', px: [0,'30px']}}>
      <div className='wrapper' sx={{backgroundColor: 'primary', py: 3}}>
        <Flex sx={{minHeight: ['auto','200px'], width: '100%', p: '8px 30px', flexDirection: 'column', alignItems: 'center', backgroundColor: 'primary'}}>
          <Styled.h3 sx={{pb:4, borderBottom: '1px solid #fff', textAlign: 'center'}}>BUILD YOUR BUNDLE</Styled.h3>
          <Flex sx={{alignItems: 'center', mb: 4}} className="priceSet">
            <Styled.h5 sx={{fontSize: 4, textDecoration: 'line-through', fontWeight:'200', color: 'dark', my: 0}}>$44.97</Styled.h5>
            <Styled.h2 sx={{color: 'white', mx: 4, my: 0}}>$39</Styled.h2>
            <Styled.h6 sx={{color: 'white', verticalAlign: 'middle', my: 0}}> + <div sx={{display: "inline-block", verticalAlign: 'middle'}}>Free <br /> Shipping</div></Styled.h6>
          </Flex>
          <Flex sx={{justifyContent: 'space-between', width: '100%'}}>
            {[...Array(quantity).keys()].map((p, index) => {
              return <ProductSelect key={p} product={products[index]} count={index+1} />
            })}
          </Flex>
          <div sx={{width: '100%', display: 'flex', justifyContent: 'center', pb: '20px'}} isActive={isFull} onClick={isFull ? addToCart : null}>
          {
            isFull ? (
            <AddToCart
            cta={
              isFull
                ? 'BUY NOW'
                : `SELECT ${quantity - products.length} PRODUCTS`
                // : `Buy Now`
            }
            discount={discount}
            items={products}
            variant={'dark'}
            isActive={isFull}
            />
            ) 
            : (
              <Button variant={'dark'} disabled sx={{p: '10px 20px', width: '100%', textTransform: 'uppercase', mt: 0, lineHeight: '1'}} disabled>SELECT {quantity - products.length} PRODUCTS</Button>
            )
          }
          
        </div>
        </Flex>
      </div>
    </div>
  )
}

export default Confirm
