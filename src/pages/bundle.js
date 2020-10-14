/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import React, { useState, useEffect } from 'react'

import { Bundle } from '../components/Bundle'
import SEO from '../components/seo'
import Layout from '../components/bundleLayout'
import { BundleHeader, Footer } from '../components/Navigation'

import placeholder from '../images/placeholder.png'


const items = [
  {
    name: 'Original Citrus',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC85Njc3NzQyMjEx',
    quantity: 1,
    description: 'lemon + bergamot + lemongrass',
    images: [{ originalSrc: placeholder }],
    badgeColor: '#0ec0e3',
    badgeText: 'Best Seller',
  },
  {
    name: 'Lavender Peppermint',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTQ0ODI0NTQxMTkzNw==',
    quantity: 1,
    description: 'lavender + peppermint',
    images: [{ originalSrc: placeholder }],
    badgeColor: '#efd000',
    badgeText: 'New Product',
  },
  {
    name: 'Royal Flush',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjQzMjYxNzM0MTAyNQ==',
    quantity: 1,
    description: 'eucalyptus + spearmint',
    images: [{ originalSrc: placeholder }],
  },
  {
    name: 'Tropical Hibiscus',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjQzMjYxMTMxMTcxMw==',
    quantity: 1,
    description: 'hibiscus + apricot + citrus',
    images: [{ originalSrc: placeholder }],
  },
  {
    name: 'Déjà Poo',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC85Njc3MzI1MTIz',
    quantity: 1,
    description: 'white flowers + citrus',
    images: [{ originalSrc: placeholder }],
  },
  {
    name: 'Pink Citron',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC85Njc3NDUwNDk5',
    quantity: 1,
    description: 'strawberry + rock candy + citron',
    images: [{ originalSrc: placeholder }],
  },
  {
    name: 'Flush Down',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDkzNjA0NjMzODE0NQ==',
    quantity: 1,
    description: 'oak moss + grass + citrus',
    images: [{ originalSrc: placeholder }],
  }
]

const BundlePage = () => (
  <Layout>
    <SEO title='Bundle' />
    <BundleHeader />
    <Container sx={{my: '50px'}}>
      <Bundle items={items} quantity={3} discount={'WELCOME30'} /> <Footer />
    </Container>
    
  </Layout>
)

export default BundlePage
