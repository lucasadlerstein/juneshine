/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled,Flex, Button } from "theme-ui"
import React, {useContext} from 'react';
import QuizComponent from './QuizComponent';
import ResultComponent from "./ResultComponent"
import quizContext from '../../context/QuizContext/quizContext';

const GeneralQuiz = () => {
    const QuizContext = useContext(quizContext);
    const { done } = QuizContext;

    if(done) {
        return (
            <ResultComponent />
        )
    } else {
        return (
            <QuizComponent />
        )
    }
}
 
export default GeneralQuiz;