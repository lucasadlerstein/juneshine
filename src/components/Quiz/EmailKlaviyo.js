/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React, {useContext, useState, useEffect} from 'react';
import Question from './Question';
import styled from 'styled-components';
import quizContext from '../../context/QuizContext/quizContext';
import RightArrowIcon from '../../images/Quiz/send-arrow.png';
import {subscribe} from "klaviyo-subscribe"

const TextInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 2px;
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    width: 80%;
    @media (min-width: 768px){
        width: 220px;
    }
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

const GetEmail = () => {

    const QuizContext = useContext(quizContext);
    const { answerCompleted } = QuizContext;

    const [emailTyped, setEmailTyped] = useState('');

    const listId = "Y96CSh";

    const sendForm = e => {
        e.preventDefault();
        if( emailTyped === '' ) {
            alert('Email is required');
        } else {
            // Save to KLAVIYO
            subscribe(listId, emailTyped).then(response => {             
                // MOVE STEP FORWARD
                answerCompleted(0);
            });
        }
    }

    const handleChange = e => {
        setEmailTyped(e.target.value)
    }


    return (
        <>
            <Question lineOne="Sign up for emails and get 10% off your next order," lineTwo="plus all the deets on new releases, offers and more." />
            <form onSubmit={sendForm}>
                <Container sx={{textAlign: 'center'}}>
                    <TextInput type="email" placeholder="My email is..." name="emailTyped" onChange={handleChange} />
                    <ButtonSend type="submit">
                        <img src={RightArrowIcon} alt="Save Email"/>
                    </ButtonSend>
                </Container>
            </form>
        </>
    );
}
 
export default GetEmail;