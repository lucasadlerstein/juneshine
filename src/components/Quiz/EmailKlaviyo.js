/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React, {useContext, useState} from 'react';
import Question from './Question';
import styled from 'styled-components';
import quizContext from '../../context/QuizContext/quizContext';
import RightArrowIcon from '../../images/Quiz/send-arrow.png';
import {subscribe} from "klaviyo-subscribe"
import '../../styles/spinner.css';

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
    const [loading, setLoading] = useState(false);

    const listId = "Y96CSh";

    const sendForm = async e => {
        e.preventDefault();
        if( emailTyped === '' ) {
            alert('Email is required');
        } else {
            setLoading(true);

            // // KLAVIYO
            subscribe(listId, emailTyped)
                .then(response => {     
                    console.log(response);
                    // MOVE STEP FORWARD WITH 0 POINTS
                    answerCompleted(0);
                })
                .catch(error => {
                    console.log(error);
                    answerCompleted(0);
                })
        }
    }

    const handleChange = e => {
        setEmailTyped(e.target.value)
    }

    return (
        <>
            <Question lineOne="Sign up for emails and get 10% off your next order," lineTwo="plus all the deets on new releases, offers and more." />
            {
                (loading === false) ? (
                    <form onSubmit={sendForm}>
                        <Container sx={{textAlign: 'center'}}>
                            <TextInput type="email" placeholder="My email is..." name="emailTyped" onChange={handleChange} />
                            <ButtonSend type="submit">
                                <img src={RightArrowIcon} alt="Save Email"/>
                            </ButtonSend>
                        </Container>
                    </form>
                ) : (
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                )
            }
            
        </>
    );
}
 
export default GetEmail;