import React, { useReducer } from 'react';
import quizContext from './quizContext';
import quizReducer from './quizReducer';
import { NAME_COMPLETED, ANSWER_DONE, HIDE_STEP, NUMBER_STEPS } from '../../types/index';

const QuizState = ({children}) => {
    const stateInicial = {
        name: '',
        step: 0,
        points: 0,
        done: false,
        hide: false,
        totalSteps: 0
    }

    const [ state, dispatch ] = useReducer(quizReducer, stateInicial);

    // Functions

    const saveName = name => {
        dispatch({
            type: NAME_COMPLETED,
            payload: name
        });
    }

    const answerCompleted = value => {
        dispatch({
            type: HIDE_STEP
        });

        setTimeout(() => {
            dispatch({
                type: ANSWER_DONE,
                payload: value
            })
        }, 50);
    }

    const setNumberOfSteps = numSteps => {
        dispatch({
            type: NUMBER_STEPS,
            payload: numSteps
        })
    }

    return (
        <quizContext.Provider
            value={{
                name: state.name,
                step: state.step,
                points: state.points,
                done: state.done,
                hide: state.hide,
                totalSteps: state.totalSteps,
                saveName,
                answerCompleted,
                setNumberOfSteps
            }}
        >
            {children}
        </quizContext.Provider>
    );
}
 
export default QuizState;