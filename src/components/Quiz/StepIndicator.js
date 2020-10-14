/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex } from "theme-ui"
import React, {useContext} from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';
import quizContext from '../../context/QuizContext/quizContext';


const StepIndicator = () => {
    
    const QuizContext = useContext(quizContext);
    const { step } = QuizContext;

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
        <Grid columns={[5]} gap={[0]} sx={{width: '40%', textAlign: 'center', margin: '0 auto 50px auto'}}>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 0 ? "0.3" : "1"}>
                <Img fluid={drink1.childImageSharp.fluid} sx={{width:["100%","50px"]}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 1 ? "0.3" : "1"}>
                <Img fluid={drink2.childImageSharp.fluid} sx={{width:["100%","50px"]}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 2 ? "0.3" : "1"}>
                <Img fluid={drink3.childImageSharp.fluid} sx={{width:["100%","50px"]}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 3 ? "0.3" : "1"}>
                <Img fluid={drink4.childImageSharp.fluid} sx={{width:["100%","50px"]}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 4 ? "0.3" : "1"}>
                <Img fluid={drink5.childImageSharp.fluid} sx={{width:["100%","50px"]}} />
            </Flex>
        </Grid>
    );
}
 
export default StepIndicator;