/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BundleContext } from '../../context'


const AddToBundle = ({
  cta,
  variant = 'primary',
  discount,
  items = [],
  isActive,
}) => {
  const {
    client,
    addVariantsToCart,
    store: { adding },
  } = useContext(BundleContext)

  const [click, setClick] = useState(false)

  let lineItems = []

  items.map((item, i) => {
    lineItems.push({
      variantId: item.variantId,
      quantity: item.quantity,
    })
  })

  const handleAddToCart = (e) => {
    e.persist()
    setClick(true)
    addVariantsToCart(lineItems, `${discount}`)
  }

  useEffect(() => (adding && click ? setClick(true) : setClick(false)), [
    adding,
  ])

  return (
    <Button sx={{transition:' 0.4s ease background-color', p: '10px 20px', width: '100%', textTransform: 'uppercase', mt: 0, lineHeight: '1'}}
      type='submit'
      disabled={adding}
      onClick={handleAddToCart}
      variant={variant}
      isActive={isActive}
      className={isActive ? 'enabledBundleAddtoCart' : 'disabledBundleAddtoCart'}
    >
      {adding && click ? 'ADDING...' : `${cta}`}
    </Button>
  )
}

export default AddToBundle
