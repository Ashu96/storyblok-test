import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Icon from '../Icon'
import Components from '../components.js'

import { primary, extended } from '../../constants/colors'

const CarouselWrapper = Styled.div`
  & .item {
    width: 320px;
    height: 320px;
    background-color: ${extended.blue.five};
    /* margin: 0px 36px; */
  }

  & .uprise-dots li button::before {
    color: #edeafa;
    opacity: 1;
  }

  & .uprise-dots .slick-active button::before {
    color: ${primary.purple};
    opacity: 1;
  }

  .slick-dots {
    width: 70%;
    left: 15%;
    bottom: -40px;

    @media (min-width: 768px) {
      width: 50%;
      left: 25%;
      bottom: -40px;
    }
    @media (min-width: 1024px) {
      width: 50%;
      left: 25%;
      bottom: -40px;
    }
  }

  .slick-prev {
    top: 110% !important;
    left: 5%;

    @media (min-width: 768px) {
      top: 110% !important;
      left: 20%;
    }
    @media (min-width: 1024px) {
      top: 110% !important;
      left: 20%;
    }
  }

  & .slick-next {
    top: 110% !important;
    right: 5% !important;

    @media (min-width: 768px) {
      top: 110% !important;
      right: 20% !important;
    }
    @media (min-width: 1024px) {
      top: 110% !important;
      right: 20% !important;
    }
  }
`

const settings = {
  dots: true,
  className: 'center',
  centerMode: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 2.7,
  speed: 500,
  dotsClass: 'slick-dots uprise-dots',
  easing: 'fade-in',
  nextArrow: <Arrow />,
  prevArrow: <Arrow rotate={180} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
}

function Carousel({ blok }) {
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {blok.columns.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok
          })
        )}
      </Slider>
    </CarouselWrapper>
  )
}

export default Carousel

Carousel.propTypes = {
  title: PropTypes.string.isRequired
}
Carousel.defaultTypes = {
  title: PropTypes.string.isRequired
}

const ArrowWrapper = Styled.div`
  & ~ .slick-next {
    top: 110% !important;
    right: 30%;
  }

  &::before {
    content: '' !important;
  }

`

function Arrow(props) {
  const { className, style, onClick, rotate } = props
  return (
    <ArrowWrapper className={className} style={style} onClick={onClick}>
      <Icon fill={primary.purple} rotate={rotate} />
    </ArrowWrapper>
  )
}
