/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import{ useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../context'


const AddToCart = ({ cta, variant="primary", discount, items=[]}) => {

  const { 
    client,
    addVariantsToCart,
    store: { 
      adding},
  } = useContext(StoreContext)

  
  const [click, setClick] = useState(false)
  

  let lineItems= []

  items.map((item,i) => {
    lineItems.push({
      variantId: item.variantId,
      quantity: item.quantity
    })
  })

  
  const handleAddToCart = (e) => {
    e.persist()
    setClick(true)
    addVariantsToCart(lineItems, `${discount}`)
  }

  useEffect(() => (
    adding && click ? setClick(true) : setClick(false)
  ),[adding])


  return (

    <Button
      type="submit"
      disabled={adding}
      onClick={handleAddToCart}
      variant={variant}
      sx={{mt: 4}}
    >
      {adding && click ? "ADDING..." : `${cta}`}
    </Button>

  )
}

export default AddToCart;