/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React, {useContext, useEffect} from 'react';
import StepIndicator from "./StepIndicator";
import Question from "./Question";
import TextAnswer from "./TextAnswer";
import ImgAnswer from "./ImgAnswer";
import GetName from './GetName';
import quizContext from '../../context/QuizContext/quizContext';
import ResultComponent from "./ResultComponent"
import Data from './Data.js';
import styled from 'styled-components';

const FlexOption = styled(Flex)`
    width: 90%;
    flex: 0 0 1;
    align-items: center;
    margin-bottom: 35px;
    
    @media (min-width: 540px){
        width: 50%;
        flex: 0 0 50%;
    }
`;

const ContainerPersonalized  = styled(Container)`
    padding-top: 20px;
    padding-bottom: 40px;
    @media (min-width: 540px){
        padding-top: 30px;
        padding-bottom: 60px;
    }
`;

const QuizComponent = () => {
    const QuizContext = useContext(quizContext);
    const { step, hide } = QuizContext;

    useEffect(() => {
        const quizSection = document.querySelector('#quizSection'); 
        if(quizSection) {
            quizSection.style.transition = 'all .3s ease';
            quizSection.style.opacity = 0;
            
            setTimeout(() => {
                quizSection.style.opacity = 1;
            }, 300);
        }
        // eslint-disable-next-line
    }, [hide]);

    return (
        <div sx={{backgroundColor: '#f7f7f7'}}>
            <ContainerPersonalized>

                { (step === Data.length) ? null : <StepIndicator /> }
                
                {
                    (step === -1) ? (
                        <GetName />
                    ) : (

                        (step === Data.length) ? (
                            <ResultComponent />
                        ) : (
                            <div id="quizSection" key={step}>
                                <Question lineOne={Data[step].Question.LineOne} lineTwo={Data[step].Question.LineTwo} />
                                <Flex sx={{width: '90%', justifyContent: 'center',  flexWrap: 'wrap', textAlign: 'center', margin: '0 auto 50px auto'}}>
                                {
                                    Data[step].Answers.map( one => {
                                        if(one.Type === 'text') {
                                            return (
                                                <FlexOption>
                                                    <TextAnswer text={one.Text} value={one.Value} />
                                                </FlexOption>
                                            )
                                        } 
                                        
                                        if(one.Type === 'darkimg' || one.Type === 'lightimg') {
                                            return (
                                                <FlexOption>
                                                    <ImgAnswer img={one.Picture} mode={one.Type} text={one.Text} value={one.Value} />
                                                </FlexOption>
                                            )
                                        }
                                    })
                                }
                                </Flex>
                            </div>
                        )
                    )
                }
            </ContainerPersonalized>
        </div>
    );
}
 
export default QuizComponent;