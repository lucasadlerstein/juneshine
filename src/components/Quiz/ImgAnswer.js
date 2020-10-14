/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React, {useContext} from 'react';
import styled from 'styled-components';
import quizContext from '../../context/QuizContext/quizContext';

const ImgOption = styled.button`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /* box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2); */
    border: 2px solid black;
    text-align: center;
    display: block;
    width: 90%;
    min-height: 150px;
    font-family: 'RobotoMono', monospace;
    font-size: 16px;
    padding: 0 40px;
    line-height: 1.5;
    transition: all .3s ease;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`; 

const ImgAnswer = ({mode, img, text, name, value}) => {

    const QuizContext = useContext(quizContext);
    const { answerCompleted } = QuizContext;

    const DarkImg = styled(ImgOption)`
        background-image: linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url('${img}');
        color: white;
    `;

    const LightImg = styled(ImgOption)`
        background-image: linear-gradient( rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75) ), url('${img}');
        color: black;
    `;

    const JustImage = styled(ImgOption)`
        background-image: url('${img}');
    `;
    
    const clickAnswerButton = () => {
        answerCompleted(value);
    }

    if (mode === 'darkimg') {
        return (
            <DarkImg onClick={clickAnswerButton}>{text}</DarkImg>
        );
    } else if (mode === 'lightimg') {
        return (
            <LightImg onClick={clickAnswerButton}>{text}</LightImg>
        );
    } else {
        return (
            <JustImage onClick={clickAnswerButton}></JustImage>
        )
    }
    
}
 
export default ImgAnswer;