/** @jsx jsx */

import { jsx, Box, Container, Grid, Flex, Styled, Button, Link} from "theme-ui"
import React from 'react';

const QuizHeader = () => {
    return (
        <div sx={{backgroundColor: 'primary'}}>
            <Container sx={{py: 6}}>
                <Styled.h2 sx={{textAlign: 'center', color: 'white', width: '90%', mx: 'auto', textTransform: 'uppercase'}}>Drink the best version of you</Styled.h2>
                <Styled.p sx={{textAlign: 'center', color: 'white', width: '80%', mx: 'auto', textTransform: 'uppercase', mb: '0'}}>Just asking some questions</Styled.p>
            </Container>
        </div>
    );
}
 
export default QuizHeader;