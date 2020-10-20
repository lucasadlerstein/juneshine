/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React, {useContext, useEffect, useState} from 'react';
import ResultTitle from './ResultTitle';
import IndividualResult from './IndividualResult';
import quizContext from '../../context/QuizContext/quizContext';

import '../../styles/spinner.css';
import {useStaticQuery, graphql} from 'gatsby'

// 1 MIDNIGHT PAINKILLER
// 2 BLOOD ORANGE MINT
// 3 ACAI BERRY
// 4 hopical citrus
// 5 honey ginger lemon


const ResultComponent = ({items, answers}) => {
  
  const QuizContext = useContext(quizContext);
  const { name, points } = QuizContext;
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2100);
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      {
        (loading === true) ? (
          <div style={{textAlign: 'center'}}>
            {
              (name !== '') ? <ResultTitle text={`Be patient ${name}, your JuneShine is brewing...`} /> : <ResultTitle text={`Be patient, your JuneShine is brewing...`} />
            }
            
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        ) : (
          <div sx={{backgroundColor: '#f7f7f7'}}>
              <Container sx={{ textAlign: 'center'}}>
                  
                  {
                    (name !== '') ? <ResultTitle text={`${name}, for sure you will love our`} /> : <ResultTitle text={`For sure you will love our`} />
                  }

                  <IndividualResult product={items[answers[points-1].Main]} />
                  <ResultTitle text={'Or this...'} />
                  {
                    (items[answers[points-1].Second] === items[answers[points-1].Main]) ? null : (
                      <IndividualResult product={items[answers[points-1].Second]} marginBottom={'50px'} />
                    )
                  }
                  <IndividualResult product={items[answers[points-1].Third]} />
              </Container>
          </div>
        )
      }
    </>
  );
}
 
export default ResultComponent;