/** @jsx jsx */
import { jsx, Container, Flex, Grid, Styled } from "theme-ui"

import Img from 'gatsby-image'


export const LogoBar = ({logos=[], backgroundColor, mobile=[]}) => {

  return (
    <section sx={{backgroundColor: `${backgroundColor}`}}>
      <Container sx={{py: [5,6]}}>
        <Flex sx={{justifyContent: 'center', alignItems: 'center', flexWrap: ['wrap', 'nowrap'], display: ['none', 'flex']}}>
          {logos.map((q,i) => (
            <Flex key={i} sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexBasis: '50%'}}>
                <div sx={{flexBasis: '20%'}}>
                    <img src={q.logo} sx={{width: '90%', mx: 'auto'}}/>
                </div>
            </Flex>
          ))}
        </Flex>
        <Flex sx={{justifyContent: 'center', alignItems: 'center', flexWrap: ['wrap', 'nowrap'], display: ['flex', 'none']}}>
          {mobile.map((q,i) => (
            <Flex key={i} sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexBasis: '50%', mt: '10px'}}>
                <div sx={{textAlign: 'center'}}>
                    <img src={q.logo} sx={{width: '90%', mx: 'auto'}}/>
                </div>
            </Flex>
          ))}
        </Flex>
      </Container>
    </section>
  ) 
}
