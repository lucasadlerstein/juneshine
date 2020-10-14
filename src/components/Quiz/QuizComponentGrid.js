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
            <Container sx={{py: 6}}>
                <StepIndicator />
                {
                    (step === -1) ? (
                        <GetName />
                    ) : (

                        (step === Data.length) ? (
                            <ResultComponent />
                        ) : (
                            <div id="quizSection" key={step}>
                                <Question lineOne={Data[step].Question.LineOne} lineTwo={Data[step].Question.LineTwo} />
                                <Grid columns={[1, 2]} gap={[4]} sx={{width: '90%', justifyContent: 'center', textAlign: 'center', margin: '0 auto 50px auto'}}>
                                {
                                    Data[step].Answers.map( one => {
                                        if(one.Type === 'text') {
                                            return (
                                                <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                                    <TextAnswer text={one.Text} value={one.Value} />
                                                </Flex>
                                            )
                                        } 
                                        
                                        if(one.Type === 'darkimg' || one.Type === 'lightimg') {
                                            return (
                                                <Flex sx={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                                                    <ImgAnswer img={one.Picture} mode={one.Type} text={one.Text} value={one.Value} />
                                                </Flex>
                                            )
                                        }
                                    })
                                }
                                </Grid>
                            </div>
                        )
                    )
                }
            </Container>
        </div>
    );
}
 
export default QuizComponent;