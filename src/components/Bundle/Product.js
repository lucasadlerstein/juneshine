/** @jsx jsx */
import { jsx, Styled, Flex, Link } from "theme-ui"
import React, { useState } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'


const Product = ({
  name,
  subname,
  description,
  id,
  image,
  quantity,
  addProduct,
  removeProduct,
  isMaxReached,
  badgeColor,
  badgeText,
}) => {
  const handleAdd = () => {
    addProduct(id)
  }

  const handleRemove = () => {
    removeProduct(id)
  }

  return (
    <Flex sx={{position: 'relative', backgroundColor: '#fff', justifyContent: 'space-between', flexDirection: 'column' , p: '15px', alignItems: 'center'}}>
      <Flex sx={{mb: 4, alignItems: 'center', flexDirection: 'column', }}>
        <div sx={{height: '60%', textAlign: 'center', position: 'relative'}}>
          {badgeText ? (
            <div className={'badgeBundle'} sx={{backgroundColor: `${badgeColor}`}}>{badgeText}</div>
          ) : null}
          <img src={image} sx={{height: 'auto', width: 'auto', mx: 'auto'}} />
        </div>
        <div>
          <Styled.h4 sx={{textAlign: 'center', mb: 0, textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: name}} />
          <Styled.h4 sx={{textAlign: 'center', mt: 0, mb: 4, textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: subname}} />
          <Styled.p sx={{my: '5px', fontSize: '14px !important', textAlign: 'center', textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: description}} />
        </div>
      </Flex>
      
      <Flex sx={{alignItems: 'center', flexDirection: 'column'}}>
        <Styled.a as={Link} to="#nutrition" sx={{color: 'black', textDecoration: 'underline', fontWeight: '400', mb: 4, textAlign: 'center'}}> SEE NUTRITION FACTS</Styled.a>
        <Flex sx={{alignItems: 'center'}}>
          <button sx={{display: 'flex', background: 'white', borderRadius: '50%', width: '30px', height: '30px', border: 'none', color: 'dark', m: '10px', alignContent: 'center', justifyContent: 'center', cursor: 'pointer'}} className={quantity > 0 ? 'activeBundle' : 'activeBundleInactive'}>
            <MdRemove size={30} onClick={handleRemove} />
          </button>
          <Flex sx={{backgroundColor: '#fff', borderRadius: '50%', width: '50px', height: '50px', border: 'none', color: 'dark', border:'2px solid', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', outline: 'none', fontSize: '24px', fontWeight: 'bold'}} onClick={quantity > 0 || isMaxReached ? null : handleAdd} className={isMaxReached && quantity === 0 ? 'inactiveAddButton' : null}>
            {quantity > 0 ? <span>{quantity}</span> : <MdAdd size={32} />}
          </Flex>
          <button sx={{display: 'flex', background: 'white', borderRadius: '50%', width: '30px', height: '30px', border: 'none', color: 'dark', m: '10px', alignContent: 'center', justifyContent: 'center', cursor: 'pointer'}} className={quantity > 0 && !isMaxReached ? 'activeBundle' : 'activeBundleInactive'} onClick={isMaxReached ? null : handleAdd}>
            <MdAdd size={30} />
          </button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Product
