/** @jsx jsx */
import { jsx, Styled, Box, Flex } from 'theme-ui'
import { useContext } from 'react'
import { StoreContext } from '../../context'

const LineItem = (props) => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      width='100%'
      height='100%'
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        (option) => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <Flex
      sx={{
        alignItems: 'center',
        backgroundColor: 'light',
        border: '1px solid #e0e0e0',
        minWidth: '300px',
      }}
    >
      <Box
        sx={{
          height: '100px',
          width: '100px',
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        style={{ backgroundImage: `url(${line_item.variant.image.src})` }}
      ></Box>
      <Box sx={{ width: '100%', px: 2 }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Styled.h6 sx={{ fontWeight: 'heading', my: '0' }}>
              {line_item.title}
            </Styled.h6>
            <Styled.p
              sx={{ fontSize: '16px', py: '0px', my: '0px', opacity: '0.5' }}
            >
              ${line_item.variant.price}
            </Styled.p>
          </div>
          <div>
            <Flex
              sx={{
                backgroundColor: 'primary',
                justifyContent: 'center',
                alignItems: 'center',
                height: '25px',
                minWidth: '25px',
                borderRadius: '99px',
                color: 'white',
                mr: 2,
              }}
            >
              {line_item.quantity}
            </Flex>
          </div>
        </Flex>
      </Box>
      {/* <Styled.a onClick={handleRemove} sx={{pr: 4}}>
        <svg style={{width: "16px"}}viewBox="0 0 16 16"><path clipRule="evenodd" d="M15.78.22a.75.75 0 0 1 0 1.06L9.06 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L8 9.06l-6.72 6.72a.75.75 0 0 1-1.06-1.06L6.94 8 .22 1.28A.75.75 0 1 1 1.28.22L8 6.94 14.72.22a.75.75 0 0 1 1.06 0z" fillRule="evenodd"></path></svg>
      </Styled.a> */}
    </Flex>
  )
}

export default LineItem
