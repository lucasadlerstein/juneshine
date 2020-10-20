/** @jsx jsx */
import { jsx, Container, Grid, Styled, Flex } from "theme-ui"

import React, {useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../../components/seo'
import Layout from '../../components/bundleLayout'
import { BundleHeader, Footer } from '../../components/Navigation'
import { LogoBar } from '../../components/Sections'

import forbes from '../../images/logos/forbes-white.png'
import nbc from '../../images/logos/nbc-white.png'
import popsugar from '../../images/logos/popsugar-white.png'
import coolHunting from '../../images/logos/cool hunting-white.png'
import today from '../../images/logos/today-white.png'

// Quiz Components
import QuizHeader from '../../components/Quiz/QuizHeader';
import QuizState from '../../context/QuizContext/quizState';
import QuizComponent from '../../components/Quiz/QuizComponent';
import { redirectPerRegion } from '../../helpers/getLocation';

// DATA FOR QUIZ
import JsonResults from '../../components/Quiz/Answers.json';
import Data from '../../components/Quiz/Data.js'; 
// Items inside the component

const Index = () => {

    const { drink1, drink2, drink3, drink4, drink5, AcaiImg, BloodOrangeMintImg, HoneyGingerImg, HopicalCitrusImg, MidnightImg } = useStaticQuery(graphql`
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
              AcaiImg: file(relativePath: { eq: "Quiz/Acai.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
              BloodOrangeMintImg: file(relativePath: { eq: "Quiz/Blood.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
              HoneyGingerImg: file(relativePath: { eq: "Quiz/Honey.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
              HopicalCitrusImg: file(relativePath: { eq: "Quiz/Hopical.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
              MidnightImg: file(relativePath: { eq: "Quiz/Midnight.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
        
        }
    `);

    const regionsArray = ['California', 'New York', 'CA', 'NY'];

    const items = [
        {},
        {
        title: 'MIDNIGHT PAINKILLER',
        subtitle: '6% ABV',
        name: 'JuneShine Midnight Painkiller - 6% ABV - BYOB',
        description: 'orange, pineapple, coconut, nutmeg, activated charcoal, green tea, honey, cane sugar, jun kombucha',
        images: MidnightImg,
        url: '/byob#midnight'
        },
        {
        title: 'BLOOD ORANGE MINT',
        subtitle: '6% ABV',
        name: 'JuneShine Blood Orange Mint - 6% ABV - BYOB',
        description: 'Blood orange, mint, green tea, honey, cane sugar, jun kombucha',
        images: BloodOrangeMintImg,
        url: '/byob#bloodOrang'
        },
        {
        title: 'ACAI BERRY',
        subtitle: '6% ABV',
        name: 'JuneShine Acai Berry - 6% ABV - BYOB',
        description: 'ACAI, BLUEBERRY, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
        images: AcaiImg,
        url: '/byob#acaiberry'
        },
        {
        title: 'hopical citrus',
        subtitle: '6% ABV',
        name: 'JuneShine Hopical Citrus - 6% ABV - BYOB',
        description: 'GRAPEFRUIT, ORGANIC HOPS, CITRUS ZEST, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
        images: HopicalCitrusImg,
        url: '/byob#hopical'
        },
        {
        title: 'honey ginger lemon',
        subtitle: '6% ABV',
        name: 'honey ginger lemon <br /> - 6% ABV',
        description: 'GINGER, LEMON, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
        images: HoneyGingerImg,
        url: '/byob#honeygingerlemon'
        },
    ]

    useEffect(() => {
        redirectPerRegion(regionsArray, 'https://google.com');
        // eslint-disable-next-line
    }, []);

    return (
        <Layout>
          <QuizState>
              <SEO title='Find the best bundle for you' />
              <BundleHeader />
              <div sx={{mt: '70px'}}>
                  
                  <QuizHeader />
                  <QuizComponent items={items} data={Data} answers={JsonResults} numberOfSteps={3} />
                    {/*     Number of steps BEFORE first question.
                            3 because "FIRST SLIDER" / "NAME" / "EMAIL". */}


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

export default Index
