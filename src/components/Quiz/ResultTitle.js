/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React from 'react';

const ResultTitle = ({text}) => {
    return (
        <Styled.h3 sx={{textAlign: 'center', lineHeight: '1.5', color: 'black', width: '100%', py: '20px', mx: 'auto'}}>{text}</Styled.h3>
    );
}
 
export default ResultTitle;