/** @jsx jsx */

import { jsx, Box, Flex, Styled, Grid, Button, Container } from 'theme-ui'
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from 'gatsby-image'

export const Footer = () => {


  const {logo, facebook, youtube, instagram} = useStaticQuery(
    graphql`
      query {

        logo: file(relativePath: { eq: "Logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        facebook: file(relativePath: { eq: "social/facebook.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        instagram: file(relativePath: { eq: "social/instagram.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        youtube: file(relativePath: { eq: "social/youtube.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

	return(
    <Box as="footer" sx={{backgroundColor: 'white', color: 'dark'}}>
      <Container sx={{py: 5}}>
        <Grid columns={[1,1,'2fr 1fr 1fr']} gap= {[3,6]} sx={{alignItems: 'flex-start'}}>
          <Flex sx={{flexDirection: 'column', justifyContent: "center", maxWidth: 'max', mx: 'auto', py: [2,4]}}>
              <Img fluid={logo.childImageSharp.fluid} sx={{width: '150px', mt: [5,'15px']}} />
              <Styled.p sx={{fontSize: [2,2,2,2], width: '90%'}}>JuneShine was started by a team of adventurers, artists, and creatives who share a passion and want to leave a positive impact on the environment. We fell in love with the refreshingly smooth taste of jun kombucha and have made it our mission to brew the highest-quality, healthiest jun kombucha there is.</Styled.p>
          </Flex>
          <Flex sx={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', py: [2,4], height: ['200px','80%']}}>
            <Styled.a href="https://juneshine.com/pages/contact" sx={{color: 'black', fontWeight: 'header'}}> CONTACT US </Styled.a>
            <Styled.a href="https://juneshine.com/pages/join-team" sx={{color: 'black', fontWeight: 'header'}}> JOIN OUR TEAM </Styled.a>
            <Styled.a href="https://juneshine.com/pages/nutrition-facts" sx={{color: 'black', fontWeight: 'header'}}> NUTRITION FACTS </Styled.a>
            <Styled.a href="https://juneshine.com/pages/shipping-and-returns" sx={{color: 'black', fontWeight: 'header'}}> SHIPPING AND RETURNS </Styled.a>
            <Styled.a href="https://juneshine.com/pages/privacy-policy" sx={{color: 'black', fontWeight: 'header'}}> PRIVACY POLICY</Styled.a>
          </Flex>
          <Box sx={{mt: [4,0]}}>
            <div><small sx={{color: 'black', fontWeight: 'header', fontWeight: 'bold'}}>Get connected</small></div>
            <Flex sx={{justifyContent: 'space-between', alignItems:'center', width: "100%", maxWidth: ['30%','40%'], mx: '0', py: 4}}>
                <Styled.a href="https://www.youtube.com/channel/UCEYaTDoH4yup7FEJf6F0u3Q" > <Img fixed={youtube.childImageSharp.fixed}/> </Styled.a>
                <Styled.a href="https://www.facebook.com/juneshinenorthpark/?rf=253661015544539" > <Img fixed={facebook.childImageSharp.fixed}/> </Styled.a>
                <Styled.a href="https://www.instagram.com/juneshineco/" > <Img fixed={instagram.childImageSharp.fixed}/> </Styled.a>
            </Flex>
          </Box>
            
        </Grid>
      </Container>
      
    </Box>
	)
}