/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import {useContext} from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StoreContext } from '../../context'
import "../../styles/modal.css"

export const SideDrawer = () => {
  const { store: { showDrawer}, toggleDrawer} = useContext(StoreContext)

  const data = useStaticQuery(
    graphql`
      query { 
        site {
          siteMetadata {
            title
            logo
            description
            author
            address {
              street
              city
              zip
              state
            }
            socials {
              instagram
              twitter
              facebook
            },
          }
        }  
      } 
    `
  )

  return(
    <div>
      <div onClick={(e) => toggleDrawer(e, showDrawer)} className={showDrawer ? 'show-opaque': 'hidden-opaque'}></div>
      <aside sx={{backgroundColor: "white", minWidth: 'xsmall', boxShadow: 'large'}} className={showDrawer ? 'show-left' : 'hidden-left'}>
        <Flex sx={{backgroundColor: 'light', justifyContent: 'space-between', alignItems: "center", px: 4, py: 2, borderBottom: "1px solid #e0e0e0"}}>
          <Styled.a onClick={(e) => toggleDrawer(e, showDrawer)} sx={{fontSize: "1.5rem"}}>
            <svg style={{width: "16px"}}viewBox="0 0 16 16"><path clipRule="evenodd" d="M15.78.22a.75.75 0 0 1 0 1.06L9.06 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L8 9.06l-6.72 6.72a.75.75 0 0 1-1.06-1.06L6.94 8 .22 1.28A.75.75 0 1 1 1.28.22L8 6.94 14.72.22a.75.75 0 0 1 1.06 0z" fillRule="evenodd"></path></svg>
          </Styled.a>
          <Styled.h6>Shop</Styled.h6>
        </Flex>

      </aside>
    </div>

  )
}