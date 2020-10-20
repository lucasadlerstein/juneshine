/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex, Link, Button } from "theme-ui"
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'

const ProductResult = styled(Grid)`
    border: 2px solid black;
    padding: 40px 30px;
    margin-right: auto!important;
    margin-left: auto!important;
    @media (min-width: 768px){
        width: 75%;
    }
`;
const Information = styled.div`
    text-align: left;
    h3 {
        font-size: 26px;
        margin: 0;
        text-transform: uppercase;
    }
    span {
        font-size: 18px;
        margin-top: -10px;
    }
    p {
        width: 75%;
        text-transform: uppercase;
        margin-top: 0;
    }

    @media (max-width: 540px){
        text-align: center;
        h3 {
            margin-top: 20px;
        }
        p {
            width: 90%;
            margin: 0 auto;
        }
    }
`;
const GetItNowButton = styled(Button)`
    margin-top: 20px!important;   
    background-color: white;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    width: 170px;
    padding: 5px 0;
    text-align: center;
    border: 1.5px solid black;
    font-weight: bold;
    transition: all .3s ease;
    
    &:hover {
        text-decoration: none;
        background-color: #fceee4;
    }

    @media (max-width: 540px){
        margin-right: auto!important;
        margin-left: auto!important;
    }
`;
const ProductImage = styled.img`
    min-height: 100%;
`;

const IndividualResult = ({product, marginBottom}) => {

    return (
        <ProductResult columns={[1,2]} gap={[0,3]} style={{marginBottom: marginBottom}}>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                <Img fluid={product.images.childImageSharp.fluid} sx={{width: '80%!important'}} />
            </Flex>
            <Flex sx={{justifyContent: 'flex-start', alignItems: 'left', flexDirection: 'column'}}>
                <Information>
                    <h3>{product.title}</h3>
                    <p><span>{product.subtitle}</span></p>
                    <p>
                        {product.description}
                    </p>
                    <GetItNowButton variant="nav" as={Link} target="_blank" href={product.url}>Get it now</GetItNowButton>
                </Information>
            </Flex>
        </ProductResult>
    );
}
 
export default IndividualResult;