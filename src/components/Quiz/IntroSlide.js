/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React, {useContext} from 'react';
import quizContext from '../../context/QuizContext/quizContext';

const IntroSlide = () => {

    const QuizContext = useContext(quizContext);
    const { answerCompleted } = QuizContext;

    return (

        <Styled.div
            sx={{
                margin: '0 auto',
                border: '2px solid #9ABCAA',
                backgroundColor: 'transparent',
                width: '95%',
                padding: '60px 30px!important',
                transition: 'all .5s ease',
                ":hover": {
                    borderRadius: '30px'
                }
            }}
        >
            <Styled.p sx={{textAlign: 'center', color: 'black', width: '100%', mx: 'auto', textTransform: 'uppercase', mt: '0'}}>We get by with a little help from our friends!</Styled.p>
            <Styled.h2 sx={{textAlign: 'center', color: 'black', width: '100%', mx: 'auto', textTransform: 'uppercase', mb: '18px'}}>Take the Flavor Finder Quiz</Styled.h2>
            <Styled.p sx={{textAlign: 'center', color: 'black', width: '100%', mx: 'auto', textTransform: 'uppercase', mb: '0'}}>and figure out what JuneShine flavor’s the one<br/><strong sx={{fontSize: '24px' }}>for you.</strong></Styled.p>
            <button
                sx={{
                    margin: '35px auto 0 auto',
                    backgroundColor: 'white',
                    color: 'black',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'block',
                    width: '170px',
                    padding: '8px 0!important',
                    textAlign: 'center',
                    border: '1.5px solid black',
                    fontWeight: 'bold',
                    transition: 'all .3s ease',
                    ":hover": {
                        textDecoration: 'none',
                        backgroundColor: '#fceee4',
                        cursor: 'pointer'
                    },
                    "@media screen and (max-width: 540px)": {
                        marginLeft: 'auto!important',
                        marginRight: 'auto!important'
                    }
                }}
                onClick={ () => answerCompleted(0)}
            >I'm ready</button>
        </Styled.div>
    );

}
 
export default IntroSlide;