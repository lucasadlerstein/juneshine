/** @jsx jsx */
import { jsx, Container, Flex, Styled, Button, Link} from 'theme-ui'
import React, {useContext} from 'react'
import reduce from 'lodash/reduce'
import Cart from "../../images/icon/cart.png"
import { BundleContext } from '../../context'
import Img from 'gatsby-image'

import logo from "../../images/Logo.png"


const useQuantity = () => {
  const { store: { checkout},} = useContext(BundleContext)
  
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}


export const BundleHeader = ({announcement, rightBtn}) => {

  const { store: { showCart}, toggleCart} = useContext(BundleContext)
  
  const [hasItems, quantity] = useQuantity()
  
  const openCart = (e) => {
    toggleCart(e,showCart)
    console.log('clicked')
  }


  return (
    <>
      {announcement && (
        <Flex sx={{backgroundColor: "white", height: "40px", alignItems: "center", justifyContent: "center", position: "sticky", top: "0", left: "0", right: "0", width: "100%", zIndex: "3000",  display: ["flex", "flex","flex"]}}>
          <Styled.p sx={{my: 0, textAlign: "center"}} dangerouslySetInnerHTML={{__html: announcement}} />
        </Flex>
      )}
      <Flex sx={{ backgroundColor: 'white', p: 4, position: "fixed", top: "0", left: "0", right: "0", width: "100%", zIndex: "3000",  display: ["flex", "flex","flex"]}}>
        <Container>
            <Flex sx={{justifyContent: 'space-between', alignItems: 'center'}}>
              <div sx={{width: '120px', mx: ['initial', 'initial'], mr: ['auto',4], display: ['block','inline-block'], verticalAlign: 'middle'}}>
                  <img src={logo} width='100%' sx={{m: 0, verticalAlign: 'middle'}} alt='' />
              </div>
              <Flex sx={{justifyContent: "flex-end", alignItems: "center"}}>
                {rightBtn && (
                    <Button variant="nav" as={Link} href="#products">Buy Now</Button>
                  )
                }
                {/* <Styled.a onClick={openCart} sx={{px: 4, position: 'relative'}}>
                  <span sx={{position: 'absolute', fontSize: '12px', borderRadius: "100%", height: '20px', width: '20px', backgroundColor: 'secondary', color: 'dark', display: 'flex', alignItems: 'center', justifyContent: 'center'}} style={{left: "10px", top: "-4px"}}>
                    {quantity}
                  </span>
                  <img src={Cart} width="35px" />
                </Styled.a> */}
              </Flex>
            </Flex>
            
           
        </Container>
      </Flex>
    </>
  )
}