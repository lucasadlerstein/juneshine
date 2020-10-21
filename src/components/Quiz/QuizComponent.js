/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React, {useContext, useEffect, useState} from 'react';
import StepIndicator from "./StepIndicator";
import Question from "./Question";
import TextAnswer from "./TextAnswer";
import ImgAnswer from "./ImgAnswer";
import GetName from './GetName';
import GetEmail from './GetEmail';
import quizContext from '../../context/QuizContext/quizContext';
import ResultComponent from "./ResultComponent"
import IntroSlide from './IntroSlide';
import styled from 'styled-components';
import EmailKlaviyo from './EmailKlaviyo';
import '../../styles/spinner.css';

const FlexOption = styled(Flex)`
    margin-left: auto!important;
    margin-right: auto!important;
    width: 100%;
    flex: 0 0 1;
    align-items: center;
    margin-bottom: 35px!important;
    justify-content: space-evenly;
    
    @media (min-width: 540px){
        width: 50%;
        flex: 0 0 50%;
    }
`;

const QuizComponent = ({items, data, answers, numberOfSteps}) => {

    const QuizContext = useContext(quizContext);
    const { step, hide, setNumberOfSteps, totalSteps } = QuizContext;
    
    const [changedSteps, setChangedSteps] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(changedSteps === false) {
            setNumberOfSteps(numberOfSteps);
            setChangedSteps(true);
        }
        setTimeout(() => {
            setLoading(false);
        }, 700);
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
            <Container sx={{
                paddingTop: '40px',
                paddingBottom: '40px'
            }}>
                { (step === totalSteps) ? null : <StepIndicator /> }

                {/* HERE STARTS EACH STEP */}
                {
                    (loading === true) ? (
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    ) : (
                        (step === -3) ? <IntroSlide /> : (
                        
                            (step === -2) ? (
                                <GetName />
                            ) : (
    
                                (step === -1) ? <EmailKlaviyo /> : (
    
                                    (step >= data.length) ? (

                                        <ResultComponent items={items} answers={answers} />
    
                                    ) : (
                                        <div id="quizSection" key={step}>
                                            <Question lineOne={data[step].Question.LineOne} lineTwo={data[step].Question.LineTwo} />
                                            <Flex sx={{width: '100%', justifyContent: 'center',  flexWrap: 'wrap', textAlign: 'center', margin: '0 auto 50px auto'}}>
                                            {
                                                data[step].Answers.map( one => {
                                                    if(one.Type === 'text') {
                                                        return (
                                                            <FlexOption key={one.Value}>
                                                                <TextAnswer text={one.Text} value={one.Value} icon={one.Icon} />
                                                            </FlexOption>
                                                        )
                                                    } 
                                                    
                                                    if(one.Type === 'darkimg' || one.Type === 'lightimg') {
                                                        return (
                                                            <FlexOption key={one.Value}>
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
                            )
                        )  
                    )
                }
                {/* END OF STEPS */}
                </Container>
        </div>
    );
}
 
export default QuizComponent;