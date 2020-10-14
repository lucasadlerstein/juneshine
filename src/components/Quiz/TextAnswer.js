/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex } from "theme-ui"
import React, {useContext} from 'react';
import styled from 'styled-components';
import quizContext from '../../context/QuizContext/quizContext';

const Option = styled.button`
    background-color: transparent;
    border: 2px solid black;
    text-align: center;
    display: block;
    width: 90%;
    min-height: 150px;
    font-family: 'RobotoMono', monospace;
    font-size: 16px;
    padding: 0 40px;
    line-height: 1.5;
    transition: background-color .3s ease;
    &:hover {
        background-color: #fceee4;
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`; 

const TextAnswer = ({text, value, name}) => {
    
    const QuizContext = useContext(quizContext);
    const { answerCompleted } = QuizContext;

    const clickAnswerButton = () => {
        answerCompleted(value);
    }
    
    return (
        <Option onClick={clickAnswerButton}>{text}</Option>
    );
}
 
export default TextAnswer;