/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex } from "theme-ui"
import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 2px;
    text-align: center;
    margin: 0 auto;
    width: 220px;
    &::placeholder {
        color: #a7a7a7;
    }
    &:focus {
        outline: none;
    }
`;

const TypedAnswer = ({placeholder, id, name}) => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <TextInput placeholder={placeholder} name={name} id={id} />
        </Container>
    );
}
 
export default TypedAnswer;