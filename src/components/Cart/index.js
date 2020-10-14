/** @jsx jsx */
import { jsx, Grid, Styled, Box, Button } from 'theme-ui'
import { useContext } from 'react'

import { StoreContext } from '../../context'
import LineItem from './LineItem'



const Cart = () => {
  const { store: { checkout }, } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <Grid columns={[1, "2fr 1fr", "2fr 1fr"]}>
      <Box sx={{width: "100%"}}>
        { line_items }
      </Box>
      <Box sx={{boxShadow: "medium", p: 4}}>
        <Styled.h5>Subtotal</Styled.h5>
        <p>$ {checkout.subtotalPrice}</p>
        <hr />
        <Styled.h5>Taxes</Styled.h5>
        <p>$ {checkout.totalTax}</p>
        <hr />
        <Styled.h4>Total</Styled.h4>
        <p>$ {checkout.totalPrice}</p>

        <Button onClick={handleCheckout} disabled={checkout.lineItems.length === 0} sx={{width: "100%", my: 2}}>Check out</Button>
      </Box>
    </Grid>
  )
}

export default Cart