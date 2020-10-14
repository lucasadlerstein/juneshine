/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex, Button } from "theme-ui"

import React, { useState, useEffect } from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


import SEO from '../components/seo'
import Layout from '../components/bundleLayout'
import { BundleHeader, Footer } from '../components/Navigation'
import { LogoBar } from '../components/Sections'

import MidnightPainkiller from '../images/Bundle/Midnight Painkiller.png'
import BloodOrangeMint from '../images/Bundle/Blood Orange Mint.png'
import AcaiBerry from '../images/Bundle/Acai Berry.png'
import HopicalCitrus from '../images/Bundle/Hopical Citrus.png'
import HoneyGingerLemon from '../images/Bundle/Honey Ginger Lemon.png'

import forbes from '../images/logos/forbes-white.png'
import nbc from '../images/logos/nbc-white.png'
import popsugar from '../images/logos/popsugar-white.png'
import coolHunting from '../images/logos/cool hunting-white.png'
import today from '../images/logos/today-white.png'

// Quiz Components
import QuizHeader from '../components/Quiz/QuizHeader';
import QuizState from '../context/QuizContext/quizState';
import GeneralQuiz from "../components/Quiz/GeneralQuiz"

const items = [
  {
    title: 'MIDNIGHT PAINKILLER',
    subtitle: '- 6% ABV',
    name: 'JuneShine Midnight Painkiller - 6% ABV - BYOB',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNDYyMjMzODU5Njk5Nw==',
    quantity: 1,
    description: 'orange, pineapple, coconut, nutmeg, activated charcoal, green tea, honey, cane sugar, jun kombucha',
    images: MidnightPainkiller,
    badgeColor: '#9ABCAA',
    badgeText: 'Best Seller',
  },
  {
    title: 'BLOOD ORANGE MINT',
    subtitle: '- 6% ABV',
    name: 'JuneShine Blood Orange Mint - 6% ABV - BYOB',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNDYyMjI5ODU4NzI2OQ==',
    quantity: 1,
    description: 'Blood orange, mint, green tea, honey, cane sugar, jun kombucha',
    images: BloodOrangeMint,
    badgeColor: '#9ABCAA',
    badgeText: 'Best Seller',
  },
  {
    title: 'ACAI BERRY',
    subtitle: '- 6% ABV',
    name: 'JuneShine Acai Berry - 6% ABV - BYOB',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNDYyMjI4MzkzOTk3Mw==',
    quantity: 1,
    description: 'ACAI, BLUEBERRY, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
    images: AcaiBerry,
  },
  {
    title: 'hopical citrus',
    subtitle: '- 6% ABV',
    name: 'JuneShine Hopical Citrus - 6% ABV - BYOB',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNDYyMjMzNjQwMTU0MQ==',
    quantity: 1,
    description: 'GRAPEFRUIT, ORGANIC HOPS, CITRUS ZEST, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
    images: HopicalCitrus,
  },
  {
    title: 'honey ginger lemon',
    subtitle: '- 6% ABV',
    name: 'honey ginger lemon <br /> - 6% ABV',
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNDYyMjMzMDAxMTc4MQ==',
    quantity: 1,
    description: 'GINGER, LEMON, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
    images: HoneyGingerLemon,
  },
]

const Quiz = () => {
    const { drink1, drink2, drink3, drink4, drink5 } = useStaticQuery(graphql`
        query {
            drink1: file(relativePath: { eq: "Bundle/Acai Berry.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 180) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink2: file(relativePath: { eq: "Bundle/Blood Orange Mint.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 180) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink3: file(relativePath: { eq: "Bundle/Honey Ginger Lemon.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 180) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink4: file(relativePath: { eq: "Bundle/Hopical Citrus.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 180) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink5: file(relativePath: { eq: "Bundle/Midnight Painkiller.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 180) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
        }
    `);
    

    return (
        <Layout>
          <QuizState>
              <SEO title='Find the best bundle for you' />
              <BundleHeader />
              <div sx={{mt: '70px'}}>
                  
                  <QuizHeader />
                  <GeneralQuiz />

                  <div sx={{backgroundColor: '#fceee4'}}>
                      <Container sx={{py: 6}}>
                          <Styled.h2 sx={{textAlign: 'center', color: 'black', width: '90%', mx: 'auto', textTransform: 'uppercase'}}>Find yourself</Styled.h2>
                          <Styled.p sx={{textAlign: 'center', color: 'black', width: '80%', mx: 'auto', mb: '60px', textTransform: 'uppercase'}}>5 alternatives but you are unique.<br/>Find the best bundle for you</Styled.p>
                          <Grid columns={[5,5]} gap={[0,3]}>
                            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                <Img fluid={drink1.childImageSharp.fluid} sx={{width:["80%","150px"]}} />
                            </Flex>
                            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                <Img fluid={drink2.childImageSharp.fluid} sx={{width:["80%","150px"]}} />
                            </Flex>
                            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                <Img fluid={drink3.childImageSharp.fluid} sx={{width:["80%","150px"]}} />
                            </Flex>
                            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                <Img fluid={drink4.childImageSharp.fluid} sx={{width:["80%","150px"]}} />
                            </Flex>
                            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                <Img fluid={drink5.childImageSharp.fluid} sx={{width:["80%","150px"]}} />
                            </Flex>
                          </Grid>
                      </Container>
                  </div>

                  <LogoBar backgroundColor={'secondary'} logos={[{logo: forbes},{logo: nbc},{logo: popsugar},{logo: coolHunting},{logo: today}]} mobile={[{logo: forbes},{logo: nbc},{logo: coolHunting},{logo: today},{logo: popsugar}]} />
                  <Footer />
              </div>
            </QuizState>
        </Layout>
    )
    
}

export default Quiz
