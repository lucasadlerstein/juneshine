/** @jsx jsx */
import { jsx, Box, Container, Flex, Grid, Styled, Link, Button } from "theme-ui"

import Img from 'gatsby-image'

import Slider from "react-slick"
import "../../styles/slick.css"
import "../../styles/slick-theme.css"


export const Testimonials = ({quotes=[], heading, ratings, backgroundColor, page, subheading, button}) => {

  var Testimonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          center: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 1,
          // centerPadding: '32px',  
          slidesToScroll: 1,
          center: true,
        }
      }
    ]
  };


  return (
    <section sx={{backgroundColor: `${backgroundColor}`}}>
      <Container sx={{py: 6}}>
        <Styled.h2 sx={{textAlign: 'center', color: 'white', width: '100%', mx: 'auto', textTransform: 'uppercase'}}>{heading}</Styled.h2>
        <Styled.p sx={{textAlign: 'center', color: 'white', width: '100%', mx: 'auto', textTransform: 'uppercase'}}>{subheading}</Styled.p>
        
        <div className={'testimonial'} sx={{display: ['block','block','block'] }}>
          <Slider {...Testimonialsettings}>
            {quotes.map((q,i) => (
              <div key={i} style={{height: "100% !important"}}>
                <Flex sx={{flexDirection: 'column', justifyContent: ['space-between','space-between'], alignItems: ['center', 'center'], textAlign: 'center', p: [4,4,5,5], mx: 4, height: '100%'}}>
                  <div>
                    {q.title && (
                      <Styled.h5 sx={{fontSize: [2,2,1,1], fontWeight: 'bold', my: '0', textTransform: 'uppercase'}}>{q.title}</Styled.h5>
                    )}
                    {q.quote && (
                      <Styled.p sx={{fontSize: [0,0,1,1]}}>{q.quote}</Styled.p>
                    )}
                  </div>
                  <div sx={{}}>
                    <Img fluid={ratings.childImageSharp.fluid} sx={{width: '100px', mx: 'auto'}} />
                    {q.author && (
                      <Styled.h5 sx={{fontSize: [2,2,0,0], fontWeight: 'bold', mt: 2}}>{q.author}</Styled.h5>
                    )}
                  </div>
                </Flex>
              </div>
            ))}
          </Slider>
        </div>

        {button && (
          <div sx={{textAlign: 'center', px: [4,0], py: [4,2]}}>
            <Button variant="light" as={Link} href="#products" sx={{mr: [0,'15px'], mb:['15px', 0], textTransform: 'uppercase'}} dangerouslySetInnerHTML={{__html: button}} />
          </div>
          
        )}
      </Container>
    </section>
  ) 
}
