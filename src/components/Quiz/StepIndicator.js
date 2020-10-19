/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex } from "theme-ui"
import React, {useContext} from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image';
import quizContext from '../../context/QuizContext/quizContext';
import styled from 'styled-components';

const GridPersonalized = styled(Grid)`
        width: 70%;
        text-align: center;
        margin: 0 auto 30px auto!important;
    @media (min-width: 768px){
        width: 40%;
    }
`;


const StepIndicator = () => {
    
    const QuizContext = useContext(quizContext);
    const { step } = QuizContext;

    const { drink1, drink2, drink3, drink4, drink5 } = useStaticQuery(graphql`
        query {
            drink1: file(relativePath: { eq: "Quiz/Acai.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink2: file(relativePath: { eq: "Quiz/Blood.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink3: file(relativePath: { eq: "Quiz/Honey.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink4: file(relativePath: { eq: "Quiz/Hopical.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                }
                }
              }

              drink5: file(relativePath: { eq: "Quiz/Midnight.png" }) {
                childImageSharp {
                fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
        
        }
    `);

    return (
        <GridPersonalized columns={[5]} gap={[0]}>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 0 ? "0.3" : "1"}>
                <Img fluid={drink1.childImageSharp.fluid} sx={{width:"80px"}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 1 ? "0.3" : "1"}>
                <Img fluid={drink2.childImageSharp.fluid} sx={{width:"80px"}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 2 ? "0.3" : "1"}>
                <Img fluid={drink3.childImageSharp.fluid} sx={{width:"80px"}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 3 ? "0.3" : "1"}>
                <Img fluid={drink4.childImageSharp.fluid} sx={{width:"80px"}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} opacity={ step < 4 ? "0.3" : "1"}>
                <Img fluid={drink5.childImageSharp.fluid} sx={{width:"80px"}} />
            </Flex>
        </GridPersonalized>
    );
}
 
export default StepIndicator;