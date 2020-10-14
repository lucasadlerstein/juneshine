import React from 'react'

import { StoreProvider, SiteProvider } from '../provider'
import { CartModal } from "../components/Cart/CartModal"
import { Footer } from './Navigation'
import "../styles/global.css"
import "../styles/fonts.css"

const Layout = ({ children }) => {

  return (
    <StoreProvider>
      <SiteProvider>
        <main style={{minHeight: "100vh"}}>
          {children}
        </main>
        <CartModal />
      </SiteProvider>
    </StoreProvider>

  )
}

export default Layout