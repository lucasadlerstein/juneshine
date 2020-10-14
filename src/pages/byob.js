/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex } from "theme-ui"

import React, { useState, useEffect } from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import Feed from "react-instagram-authless-feed"

import { Bundle } from '../components/Bundle'
import SEO from '../components/seo'
import Layout from '../components/bundleLayout'
import { BundleHeader, Footer } from '../components/Navigation'
import { Hero, Testimonials, TableComparison, LogoBar } from '../components/Sections'

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

import ig01 from '../images/instagram/001.png'
import ig02 from '../images/instagram/002.png'
import ig03 from '../images/instagram/003.png'
import ig04 from '../images/instagram/004.png'
import ig05 from '../images/instagram/005.png'
import ig06 from '../images/instagram/006.png'
import ig07 from '../images/instagram/007.png'
import ig08 from '../images/instagram/008.png'

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

const Table = [
  {
    th: ['juneshine', 'TRADITIONAL HARD SELTZER', 'TRADITIONAL HARD CIDER', 'TRADITIONAL WINE', 'TRADITIONAL BEER'],
    tr: [
      {
        title: 'Organic Ingredients',
        content: [true,false,false,false,false]
      },
      {
        title: 'Sustainably Made',
        content: [true,false,false,false,false]
      },
      {
        title: 'Low Sugar',
        content: [true,true,false,true,true]
      },
      {
        title: 'Unique Flavors',
        content: [true,true,false,false,false]
      },
    ]
  }
]

const BuildYourOwn = () => {
    const {logo, hero, heroBg, why, vitC, usdaOrganic, realIngredients, probiotics, gluttenFree, stars, refinery, check, xmark, whatsInside, sustainability, transparency} = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "Logo.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
                }
            }

            hero: file(relativePath: { eq: "hero.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            heroBg: file(relativePath: { eq: "hero-bg.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            why: file(relativePath: { eq: "section-bg.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            vitC: file(relativePath: { eq: "icon/vitamin c.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            usdaOrganic: file(relativePath: { eq: "icon/usda organic.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            realIngredients: file(relativePath: { eq: "icon/real ingredients.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            probiotics: file(relativePath: { eq: "icon/probiotics.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            gluttenFree: file(relativePath: { eq: "icon/glutten free.png" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }

            
            stars: file(relativePath: { eq: "icon/stars-white.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                }
                }
            }

            refinery: file(relativePath: { eq: "logos/refinery29-white.png" }) {
              childImageSharp {
              fluid(quality: 100, maxWidth: 150) {
                  ...GatsbyImageSharpFluid
              }
              }
            }

            check: file(relativePath: { eq: "icon/check.png" }) {
              childImageSharp {
              fluid(quality: 100, maxWidth: 180) {
                  ...GatsbyImageSharpFluid
              }
              }
            }

            xmark: file(relativePath: { eq: "icon/xmark.png" }) {
              childImageSharp {
              fluid(quality: 100, maxWidth: 180) {
                  ...GatsbyImageSharpFluid
              }
              }
            }

            whatsInside: file(relativePath: { eq: "lighter 2.png" }) {
              childImageSharp {
              fluid(quality: 100, maxWidth: 180) {
                  ...GatsbyImageSharpFluid
              }
              }
            }

            sustainability: file(relativePath: { eq: "lighter1 1.png" }) {
              childImageSharp {
              fluid(quality: 100, maxWidth: 180) {
                  ...GatsbyImageSharpFluid
              }
              }
            }

            transparency: file(relativePath: { eq: "lighter2 1.png" }) {
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
        <SEO title='Bundle' />
        <BundleHeader rightBtn={'Buy Now'}/>
        <div sx={{mt: '70px'}}>

            <Hero logo={logo} heroImg={hero} heroBg={heroBg} headline={'Hard Kombucha. <br /> Made with Real Fruit. <br /> Packed with Flavor.'} subheadline={'Pick three flavors and build a bundle of 18 cans.'}/>
            
            <section>
                <Grid columns={[1,'2fr 3fr']}>
                    <Box sx={{order: [1,0]}}>
                        <Img fluid={why.childImageSharp.fluid} sx={{width: "100%"}} />
                    </Box>
                    <Flex sx={{justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', order: [0,1], py: [6,5]}}>
                        <Container sx={{textAlign: ['center', 'left']}}>
                            <Styled.h2 sx={{textTransform: 'uppercase', textAlign: ['center','left']}}>Why JuneShine?</Styled.h2>
                            <Styled.p sx={{my: 4}}>JuneShine is organic, naturally-brewed, hard kombucha from Southern California. Our drinks contain probiotics, antioxidants, and are gluten-free. JuneShine comes in a variety of flavors and is sustainably brewed.</Styled.p>
                            <Grid columns={[3,5]} gap={[5,4]} sx={{width: ['0','90%','70%','50%'], mt: 5, display: ['none','grid']}}>
                                <Img fluid={vitC.childImageSharp.fluid} sx={{width: "100%"}} />
                                <Img fluid={usdaOrganic.childImageSharp.fluid} sx={{width: "100%"}} />
                                <Img fluid={realIngredients.childImageSharp.fluid} sx={{width: "100%"}} />
                                <Img fluid={probiotics.childImageSharp.fluid} sx={{width: "100%"}} />
                                <Img fluid={gluttenFree.childImageSharp.fluid} sx={{width: "100%"}} />
                            </Grid>
                            <Flex sx={{width: '80%', mx: 'auto', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', display: ['flex', 'none']}}>
                                <Img fluid={vitC.childImageSharp.fluid} sx={{width: "100%", flexBasis: ['28%', '18%'], m: '6px'}} />
                                <Img fluid={usdaOrganic.childImageSharp.fluid} sx={{width: "100%", flexBasis: ['28%', '18%'], m: '6px'}} />
                                <Img fluid={realIngredients.childImageSharp.fluid} sx={{width: "100%", flexBasis: ['28%', '18%'], m: '6px'}} />
                                <Img fluid={probiotics.childImageSharp.fluid} sx={{width: "100%", flexBasis: ['28%', '18%'], m: '6px'}} />
                                <Img fluid={gluttenFree.childImageSharp.fluid} sx={{width: "100%", flexBasis: ['28%', '18%'], m: '6px'}} />
                            </Flex>
                        </Container>
                        
                    </Flex>
                </Grid>
            </section>

            <Testimonials backgroundColor={'primary'} heading="Don’t Believe Us?" subheading="Here’s what our customers think."
            ratings={stars} 
            button={'get juneshine'}
            quotes={[
            {author: "Ana C.", title: "Such an awesome variety of flavors", quote: "The painkiller is the super tropical flavor, hopical citrus is like a tame IPA, the yellow one is pretty ginger-y and refreshing, and the blood orange one is like boozy oj. Would definitely recommend! 10/10"},
            {author: "Carly", title: "Bye bye hangovers!", quote: "As a previous beer drinker, I hated the bloat I got and the nasty hangover that followed. Since I found JuneShine, I never get hangovers anymore and I actually feel good when I drink them. I love this stuff!"},
            {author: "Sean E.", title: "Amaze-balls", quote: "My wife and I love drinking JuneShine. From the beautiful packaging to the great flavors to the simple clean ingredients used, I love everything!"},
            ]} />
            
            
            <Bundle heading="Alcohol this delicious should be illegal" subheading="Pick your 3 favorite hard kombucha flavors to build your own sampler 18 pack and get 6 cans of each." items={items} quantity={3} discount={'JUNESHINEVIP'}/> 
            
            
            <section sx={{backgroundColor: 'secondary'}}>
              <Container sx={{py: [4, 2]}}>
                <Grid columns={[1,'3fr 2fr']}>
                      <Flex sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Styled.p sx={{my: 6, color: 'white', textAlign: 'center', px: [3,6] }}>“Packed inside each Instagram-worthy can of JuneShine is a smooth jun kombucha brewed with honey and green tea.”</Styled.p>
                      </Flex>
                      <Flex sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', mb: [6,0]}}>
                          <Img fluid={refinery.childImageSharp.fluid} sx={{width: "150px"}} />
                      </Flex>
                  </Grid>
              </Container>
            </section>
            <TableComparison content={Table} yes={check} no={xmark}  heading="JuneShine VS. The Competition" subheading="Here’s how we stack up." backgroundColor={'white'} />

            <section sx={{backgroundColor: 'primary'}}>
              <Container sx={{py: 6}}>
                <Styled.h2 sx={{textAlign: 'center', color: 'white', width: '90%', mx: 'auto', textTransform: 'uppercase'}}>Not Your Average Booch</Styled.h2>
                <Styled.p sx={{textAlign: 'center', color: 'white', width: '80%', mx: 'auto', mb: '60px', textTransform: 'uppercase'}}>Honest alcohol for a healthier planet.</Styled.p>
                <Grid columns={[1,3]} gap={[5,5]}>
                  <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                    <Img fluid={whatsInside.childImageSharp.fluid} sx={{width:["80%","150px"], borderRadius: '100%'}} />
                    <div sx={{textAlign: 'center', mt: 5}}>
                      <Styled.h3 sx={{color: 'white'}}>WHAT’S INSIDE</Styled.h3>
                      <Styled.p sx={{color: 'white'}}>Juneshine is made from green tea, honey, jun kombucha, juice, and spices. That’s it. Serioulsy. <br /> <br /> Our kombuchas are bursting with flavor. Each sip will leave you feeling better than the last.</Styled.p>
                    </div>
                  </Flex>
                  <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                    <Img fluid={sustainability.childImageSharp.fluid} sx={{width:["80%","150px"], borderRadius: '100%'}} />
                    <div sx={{textAlign: 'center', mt: 5}}>
                      <Styled.h3 sx={{color: 'white'}}>SUSTAINABILITY</Styled.h3>
                      <Styled.p sx={{color: 'white'}}>We pride ourselves on a sustainably brewed booch. By sourcing only organic ingredients, we never let pesticides touch our alcohol, and we donate 1% of all sales to better the planet.</Styled.p>
                    </div>
                  </Flex>
                  <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                    <Img fluid={transparency.childImageSharp.fluid} sx={{width:["80%","150px"], borderRadius: '100%'}} />
                    <div sx={{textAlign: 'center', mt: 5}}>
                      <Styled.h3 sx={{color: 'white'}}>TRANSPARENCY</Styled.h3>
                      <Styled.p sx={{color: 'white'}}>We believe that we should care just as much about the alcohol we drink as the food we eat. </Styled.p>
                    </div>
                  </Flex>
                  
                </Grid>
              </Container>
            </section>

            <LogoBar backgroundColor={'secondary'} logos={[{logo: forbes},{logo: nbc},{logo: popsugar},{logo: coolHunting},{logo: today}]} mobile={[{logo: forbes},{logo: nbc},{logo: coolHunting},{logo: today},{logo: popsugar}]} />

            {/* <Bundle heading="Alcohol this delicious should be illegal" subheading="Pick your 3 favorite hard kombucha flavors to build your own sampler 18 pack and get 6 cans of each." items={items} quantity={3} discount={'JUNESHINEVIP'} />  */}

            <section sx={{backgroundColor: '#FCF9F8'}}>
              <Container sx={{py: 6}}>
                <Styled.h2 sx={{textAlign: 'center', color: 'dark', width: '70%', mx: 'auto', textTransform: 'uppercase'}}>Check Us Out On The Gram</Styled.h2>
                <Styled.p sx={{textAlign: 'center', color: 'dark', width: '80%', mx: 'auto', mb: '60px', textTransform: 'uppercase'}}>See more on @JuneShineCo and tag us in your JS pics.</Styled.p>
                <Grid columns={[2,4]} gap={[4,4,5]}>
                  <img src={ig01} sx={{width: '100%'}} />
                  <img src={ig02} sx={{width: '100%'}} />
                  <img src={ig03} sx={{width: '100%'}} />
                  <img src={ig04} sx={{width: '100%'}} />
                  <img src={ig05} sx={{width: '100%'}} />
                  <img src={ig06} sx={{width: '100%'}} />
                  <img src={ig07} sx={{width: '100%'}} />
                  <img src={ig08} sx={{width: '100%'}} />
                </Grid>
              </Container>
            </section>
            <Footer />
          </div>
        </Layout>
    )
    
}

export default BuildYourOwn
