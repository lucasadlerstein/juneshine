import React from 'react'

import { StoreProvider, SiteProvider, BundleProvider } from '../provider'
import { BundleCart } from '../components/Bundle/BundleCart'
import { Footer } from './Navigation'
import '../styles/global.css'
import '../styles/fonts.css'

const Layout = ({ children }) => {
  return (
    <StoreProvider>
      <SiteProvider>
        <BundleProvider>
          <main style={{ minHeight: '100vh' }}>{children}</main>
          <BundleCart />
        </BundleProvider>
      </SiteProvider>
    </StoreProvider>
  )
}

export default Layout
