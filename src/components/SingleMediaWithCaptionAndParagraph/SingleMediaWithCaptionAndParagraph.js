import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import { Col } from '../../styles/grid'
import {
  Heading2,
  Heading3,
  BodyText,
  Note,
  ContentWrapper
} from '../../styles/text'
import { primary, extended } from '../../constants/colors'

const SingleMediaWithCaptionAndParagraphWrapper = Styled.div`
  flex-direction: ${props => (props.textFirst ? 'row-reverse' : 'row')};

  & img {
    width: 100%;
    max-width: ${props => (props.timeline ? '200px' : 'inherit')};
    max-height: ${props => (props.timeline ? '200px' : 'inherit')};
  }

  & .media {
    width: 80%;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 32px;
    position: relative;

    & .oval {
      position: absolute;
      /* height: 200%; */
      max-height: 800px;
      top: -50%;
      left: ${props => props.textFirst ? 'inherit' : '-50%'};
      right: ${props => props.textFirst ? '-50%' : 'inherit'};
      transform: ${props => props.textFirst ? 'none' : 'rotate(180deg)'};
    }

    & .gatsby-image-wrapper {
      width: 100%;
    }

    @media (min-width: 1024px) {
      margin-bottom: 0px;
    }
  }

  & .info:before {
    display: none;
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${primary.purple};
    position: absolute;
    border-radius: 50%;
    left: ${props => (!props.textFirst ? '-16px' : 'inherit')};
    right: ${props => (props.textFirst ? '0' : 'inherit')};
    top: 10px;

    @media (min-width: 768px) {
      display: ${props => (props.timeline ? 'block' : 'none')};
    }
  }

  & .info {
    position: relative;
    margin-top: 16px;

    & .step {
      font-weight: 600;
      color: ${extended.charcoal.two};
    }

    & p {
      margin-bottom: 10px;
    }

    & .heading {
      text-align: left;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) {
      padding-left: ${props => (props.textFirst ? '0px' : '50px')};
    }
  }
`

function SingleMediaWithCaptionAndParagraph({
  title,
  body,
  stepNumber,
  showStepNumber,
  media,
  timeline,
  content,
  showOval = false
}) {
  const fluidProps = getFluidGatsbyImage(media, {
    maxWidth: 570,
    useBase64: true,
    toFormat: 'webp'
  })

  const Heading = showStepNumber ? Heading2 : Heading3

  return (
    <SingleMediaWithCaptionAndParagraphWrapper
      className="row"
      textFirst={stepNumber % 2 === 0}
      timeline={timeline}
      showOval={showOval}
    >
      <Col className="col-12 col-lg-6 align-self-center">
        <div className="media">
          {showOval && (
            <img
              className="oval"
              src={require('../../images/oval.svg')}
              alt=""
            />
          )}
          {fluidProps && <Img fluid={fluidProps} alt={title} />}
        </div>
      </Col>
      <Col className="col-lg-6 align-self-center info">
        {stepNumber && showStepNumber && (
          <Note className="step">{`STEP ${stepNumber}`}</Note>
        )}
        <Heading className="heading">{title}</Heading>
        <BodyText>{body}</BodyText>
        {content && (
          <ContentWrapper contained>
            <ReactMarkdown source={content} />
          </ContentWrapper>
        )}
      </Col>
    </SingleMediaWithCaptionAndParagraphWrapper>
  )
}

export default SingleMediaWithCaptionAndParagraph

SingleMediaWithCaptionAndParagraph.propTypes = {
  title: PropTypes.string.isRequired
}
SingleMediaWithCaptionAndParagraph.defaultTypes = {
  title: PropTypes.string.isRequired
}
