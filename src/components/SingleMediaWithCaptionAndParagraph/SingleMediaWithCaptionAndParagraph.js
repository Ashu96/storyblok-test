import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
// import Img from 'gatsby-image'
// import { OutLineButton, PrimaryButton } from '../../styles/buttons'
import { Col } from '../../styles/grid'
import { Heading2, BodyText, Note } from '../../styles/text'
// import { backgrounds } from '../../constants/colors'

const SingleMediaWithCaptionAndParagraphWrapper = Styled.div`
  flex-direction: ${props => props.imageFirst ? 'row-reverse' : 'row'};

  & img {
    width: 100%;
  }

  & .info {
    margin-top: 16px;

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
  media
}) {
  return (
    <SingleMediaWithCaptionAndParagraphWrapper
      className="row"
      imageFirst={stepNumber % 2 === 0}
    >
      <Col className="col-12 col-lg-6">
        {media && <img src={media} alt={title} />}
        {/* {image && <Img fluid={image} alt={title} />} */}
      </Col>
      <Col className="col-lg-6 align-self-center info">
        {stepNumber && showStepNumber && <Note>{`STEP ${stepNumber}`}</Note>}
        <Heading2>{title}</Heading2>
        <BodyText>{body}</BodyText>
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
