/** @jsx jsx */
import { jsx, Grid, Container, Flex, Styled} from 'theme-ui'
import React, {useContext } from 'react'
import reduce from 'lodash/reduce'
import Cart from "../../images/icon/cart.png"
import { StoreContext } from '../../context'
import Img from 'gatsby-image'


const useQuantity = () => {
  const { store: { checkout},} = useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}


export const OfferBar = ({announcement, logo}) => {

  const { store: { showCart}, toggleCart} = useContext(StoreContext)
  
  const [hasItems, quantity] = useQuantity()
  




  return (
    <>
      {announcement && (
        <Flex sx={{backgroundColor: "white", height: "40px", alignItems: "center", justifyContent: "center", position: "sticky", top: "0", left: "0", right: "0", width: "100%", zIndex: "6",  display: ["flex", "flex","flex"]}}>
          <Styled.p sx={{my: 0, textAlign: "center"}} dangerouslySetInnerHTML={{__html: announcement}} />
        </Flex>
      )}
      <Flex sx={{ backgroundColor: '#07c0e4', p: 4, position: "relative", width: "100%", zIndex: '2', display: ["flex", "flex","flex"], bottom: '-1px'}}>
        <Container>
          <Grid columns={[3,3,1]} gap={5} sx={{gridAutoRow: "1fr"}}>
            <Img fluid={logo.childImageSharp.fluid}  sx={{width: "150px", gridColumnStart: '2', mx: ['auto', 'auto', '0'], display: ['block','none','none',]}}/>
            <Flex sx={{position: 'fixed', top: '60px', right: '0', width: "100%", justifyContent: "flex-end", alignItems: "center"}}>
              <Styled.a onClick={(e) => toggleCart(e, showCart)} sx={{px: 4, position: 'relative'}}>
                <span sx={{position: 'absolute', fontSize: '12px', borderRadius: "100%", height: '20px', width: '20px', backgroundColor: 'secondary', color: 'dark', display: 'flex', alignItems: 'center', justifyContent: 'center'}} style={{left: "10px", top: "-4px"}}>
                  {quantity}
                </span>
                <img src={Cart} width="35px" />
              </Styled.a>
            </Flex>
          </Grid>
        </Container>
      </Flex>
    </>
  )
}