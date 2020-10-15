/** @jsx jsx */
import { jsx, Container, Grid, Box, Styled, Flex } from "theme-ui"
import React, {useContext, useEffect, useState} from 'react';
import ResultTitle from './ResultTitle';
import IndividualResult from './IndividualResult';
import quizContext from '../../context/QuizContext/quizContext';
import JsonResults from './Answers.json';
import '../../styles/spinner.css';

import MidnightPainkiller from '../../images/Bundle/Midnight Painkiller.png'
import BloodOrangeMint from '../../images/Bundle/Blood Orange Mint.png'
import AcaiBerry from '../../images/Bundle/Acai Berry.png'
import HopicalCitrus from '../../images/Bundle/Hopical Citrus.png'
import HoneyGingerLemon from '../../images/Bundle/Honey Ginger Lemon.png'

// 1 MIDNIGHT PAINKILLER
// 2 BLOOD ORANGE MINT
// 3 ACAI BERRY
// 4 hopical citrus
// 5 honey ginger lemon

const items = [
    {},
    {
      title: 'MIDNIGHT PAINKILLER',
      subtitle: '6% ABV',
      name: 'JuneShine Midnight Painkiller - 6% ABV - BYOB',
      description: 'orange, pineapple, coconut, nutmeg, activated charcoal, green tea, honey, cane sugar, jun kombucha',
      images: MidnightPainkiller,
      url: '/byob#midnight'
    },
    {
      title: 'BLOOD ORANGE MINT',
      subtitle: '6% ABV',
      name: 'JuneShine Blood Orange Mint - 6% ABV - BYOB',
      description: 'Blood orange, mint, green tea, honey, cane sugar, jun kombucha',
      images: BloodOrangeMint,
      url: '/byob#bloodOrang'
    },
    {
      title: 'ACAI BERRY',
      subtitle: '6% ABV',
      name: 'JuneShine Acai Berry - 6% ABV - BYOB',
      description: 'ACAI, BLUEBERRY, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
      images: AcaiBerry,
      url: '/byob#acaiberry'
    },
    {
      title: 'hopical citrus',
      subtitle: '6% ABV',
      name: 'JuneShine Hopical Citrus - 6% ABV - BYOB',
      description: 'GRAPEFRUIT, ORGANIC HOPS, CITRUS ZEST, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
      images: HopicalCitrus,
      url: '/byob#hopical'
    },
    {
      title: 'honey ginger lemon',
      subtitle: '6% ABV',
      name: 'honey ginger lemon <br /> - 6% ABV',
      description: 'GINGER, LEMON, GREEN TEA, HONEY, CANE SUGAR, JUN KOMBUCHA',
      images: HoneyGingerLemon,
      url: '/byob#honeygingerlemon'
    },
]

const ResultComponent = () => {
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
            <ResultTitle text={`Be patient ${name}, your JuneShine is brewing...`} />
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        ) : (
          <div sx={{backgroundColor: '#f7f7f7'}}>
              <Container sx={{ textAlign: 'center'}}>
                  <ResultTitle text={`${name}, for sure you will love our`} />
                  <IndividualResult product={items[JsonResults[points-1].Main]} />
                  <ResultTitle text={'Or this...'} />
                  {
                    (items[JsonResults[points-1].Second] === items[JsonResults[points-1].Main]) ? null : (
                      <IndividualResult product={items[JsonResults[points-1].Second]} marginBottom={'50px'} />
                    )
                  }
                  <IndividualResult product={items[JsonResults[points-1].Third]} />
              </Container>
          </div>
        )
      }
    </>
  );
}
 
export default ResultComponent;