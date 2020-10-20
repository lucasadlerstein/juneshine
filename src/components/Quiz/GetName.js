/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React, {useContext, useState} from 'react';
import Question from './Question';
import styled from 'styled-components';
import quizContext from '../../context/QuizContext/quizContext';
// import RightArrowIcon from '../../images/Quiz/right-arrow.png';
import RightArrowIcon from '../../images/Quiz/send-arrow.png';


const TextInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 2px;
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    width: 220px;
    &::placeholder {
        color: #a7a7a7;
    }
    &:focus {
        outline: none;
    }
`;

const ButtonSend = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    img {
        width: 20px;
        transition: all .3s ease;
        &:hover {
            transform: rotate(360deg);
        }
    }
`;

const GetName = () => {

    const QuizContext = useContext(quizContext);
    const { saveName } = QuizContext;

    const [nameTyped, setNameTyped] = useState('');

    const sendForm = e => {
        e.preventDefault();
        if( nameTyped === '' ) {
            saveName('');
        } else {
            saveName(nameTyped);
        }
    }

    const handleChange = e => {
        setNameTyped(e.target.value)
    }


    return (
        <>
            <Question lineOne="Let's start easily," lineTwo="what's your name?" />
            <form onSubmit={sendForm}>
                <Container sx={{textAlign: 'center'}}>
                    <TextInput placeholder="My name is..." name="nameTyped" onChange={handleChange} />
                    <ButtonSend type="submit">
                        <img src={RightArrowIcon} alt="Save Name"/>
                    </ButtonSend>
                </Container>
            </form>
        </>
    );
}
 
export default GetName;