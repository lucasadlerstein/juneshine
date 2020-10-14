/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex } from "theme-ui"
import React from 'react';

const Question = ({lineOne, lineTwo}) => {
    return (
        <Styled.h3 sx={{textAlign: 'center', lineHeight: '1.5', color: 'black', width: '90%', pb: '20px', mx: 'auto'}}>{lineOne}<br/>{lineTwo}</Styled.h3>
    );
}
 
export default Question;