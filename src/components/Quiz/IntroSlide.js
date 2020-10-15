/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import React, {useContext} from 'react';
import styled from 'styled-components';
import quizContext from '../../context/QuizContext/quizContext';

const Background = styled.div`
    margin: 0 auto;
    border: 2px solid #9ABCAA;
    background-color: transparent;
    width: 95%;
    padding: 60px 35px!important;
    transition: all .5s ease;
    &:hover {
        border-radius: 30px;
    }
`;
const ButtonImReady = styled(Button)`
    margin: 35px auto 0 auto;
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

const IntroSlide = () => {

    const QuizContext = useContext(quizContext);
    const { answerCompleted } = QuizContext;

    return (
        <Background>
            <Styled.p sx={{textAlign: 'center', color: 'black', width: '100%', mx: 'auto', textTransform: 'uppercase', mt: '0'}}>We get by with a little help from our friends!</Styled.p>
            <Styled.h2 sx={{textAlign: 'center', color: 'black', width: '100%', mx: 'auto', textTransform: 'uppercase', mb: '18px'}}>Take the Flavor Finder Quiz</Styled.h2>
            <Styled.p sx={{textAlign: 'center', color: 'black', width: '100%', mx: 'auto', textTransform: 'uppercase', mb: '0'}}>and figure out what JuneShine flavor’s the one<br/><strong sx={{fontSize: '24px' }}>for you.</strong></Styled.p>
            <ButtonImReady onClick={ () => answerCompleted(0)}>I'm ready</ButtonImReady>
        </Background>
    );

}
 
export default IntroSlide;