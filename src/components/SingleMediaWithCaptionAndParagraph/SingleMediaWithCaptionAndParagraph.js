import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Col } from '../../styles/grid'
import { Heading2, BodyText, Note, ContentWrapper } from '../../styles/text'
import { primary } from '../../constants/colors'

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
    left: ${props => !props.textFirst ? '-16px' : 'inherit'};
    right: ${props => props.textFirst ? '0' : 'inherit'};
    top: 10px;

    @media (min-width: 768px) {
      display: ${props => props.timeline ? 'block' : 'none'};
    }
  }

  & .info {
    position: relative;
    margin-top: 16px;
    padding-left: ${props => props.textFirst ? '0px' : '50px'};

    & p {
      margin-bottom: 10px;
    }

    & h2 {
      text-align: left;
      margin-bottom: 20px;
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
  content
}) {
  return (
    <SingleMediaWithCaptionAndParagraphWrapper
      className="row"
      textFirst={stepNumber % 2 === 0}
      timeline={timeline}
    >
      <Col className="col-12 col-lg-6 align-self-center">
        <div className="media">
          {media && <img loading='lazy' src={media} alt={title} />}
          {/* {image && <Img fluid={image} alt={title} />} */}
        </div>
      </Col>
      <Col className="col-lg-6 align-self-center info">
        {stepNumber && showStepNumber && <Note>{`STEP ${stepNumber}`}</Note>}
        <Heading2>{title}</Heading2>
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
