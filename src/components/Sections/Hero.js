/** @jsx jsx */
import { jsx, Box, Container, Grid, Flex, Styled, Button, Link} from "theme-ui"
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'




export const Hero = ({heroImg, heroBg, logo, headline, subheadline}) => {


  return (
    <BackgroundImage fluid={heroBg.childImageSharp.fluid}>
        <Container sx={{py: [4,2]}}>
            <Grid columns={[1,2]} sx={{alignItems: 'center'}}>
                <Box sx={{pr: [0,6]}}>
                    <Flex sx={{flexDirection: 'column', my: [5,'60px'], justifyContent: 'center', alignItems: ['center', 'flex-start'], px:[5,5,0,0]}}>
                        <Styled.h1 sx={{color: 'dark', textAlign: ['center','center','left'], my: 0, }}  dangerouslySetInnerHTML={{__html: headline}} />
                        <Styled.p sx={{color: 'dark',width: '100%', maxWidth: 'xsmall', textAlign: ['center','center','left']}} dangerouslySetInnerHTML={{__html: subheadline}} />
                        <Styled.h3 sx={{textAlign: ['center', 'left']}}><span sx={{textDecoration: 'line-through', fontWeight:'200', fontSize: 'smaller'}}>$44.97</span>&emsp; $39</Styled.h3>
                        <Button as={Link} variant="secondary" href="#products" sx={{width: '50%', textTransform: 'uppercase'}}>Buy Now</Button>
                    </Flex>
                </Box>
                <Box>
                    <Img fluid={heroImg.childImageSharp.fluid} sx={{width: ['90%','90%'], mx: 'auto', mb: [4,0]}} />
                </Box>
            </Grid>
        </Container>
    </BackgroundImage>
  )
}
