/** @jsx jsx */

import {useState, useContext, useEffect} from "react"
import { jsx, Flex, Button} from 'theme-ui'
import { StoreContext } from '../../context'

const NumberInput = ({lineItem}) => {

  const { store: {client, checkout}, updateLineItem}  = useContext(StoreContext)
  const [amount, setAmount] = useState(lineItem.quantity)


  const handleQuantityChange = (value) => {
    updateLineItem(client, checkout.id, lineItem.id, value)
  }

  const IncreaseItem = (e) => {
    e.preventDefault()
    setAmount( amount + 1 );
    handleQuantityChange(amount + 1 )
  }
  const DecreaseItem = (e) => {
    e.preventDefault()
    setAmount( amount >= 1 ? amount - 1 : amount)
    handleQuantityChange(amount >= 1 ? amount - 1 : amount)
  }

  useEffect(() => (
    setAmount(lineItem.quantity)
  ),[lineItem.quantity])


  return(
    <Flex>
      <Button onClick={(e)=> DecreaseItem(e)} sx={{fontWeight: "body", fontSize: "30px", backgroundColor: "light", color: "dark", py: 1, px: 1}} >-</Button>
      <input  value={amount} onChange={handleQuantityChange} sx={{width: "50px", border: "none", p: 0, textAlign: "center"}} />
      <Button onClick={(e)=> IncreaseItem(e)} sx={{fontWeight: "body", fontSize: 1, backgroundColor: "light", color: "dark", py: 1, px: 1}}>+</Button>
    </Flex>
  )
}

export default NumberInput