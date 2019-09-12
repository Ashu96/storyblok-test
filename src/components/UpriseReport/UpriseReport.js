import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { Heading3, Heading4, Label } from '../../styles/text'

const UpriseReportWrapper = Styled.div`
  margin: auto;
  text-align: center;
  max-width: 480px;
  margin-bottom:40px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  & h3 {
    margin-bottom: 12px;
  }

  & .report__image-container {
    margin-top: 30px
    display: flex;
    flex-direction: column;

    & img {
      width: auto;
      max-width: 192px;
      max-height: 192px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }

    & h4 {
      margin-bottom: 30px;
    }
  }

  & .report__body {
    padding: 0px;

    @media (min-width: 768px) {
      padding: 0px 40px;
    }
  }

  & .report__label {
    margin-top: 69px;
    padding: 0px;

    @media (min-width: 768px) {
      padding: 0px 40px;
    }
  }
`

function UpriseReport({ blok }) {
  const { title, body, after_image, before_image, label } = blok
  return (
    <UpriseReportWrapper>
      <Heading3>{title}</Heading3>
      <Label className="report__body">{body}</Label>
      <div className="report__image-container">
        <div>
          <Heading4>Before</Heading4>
          {before_image && (
            <img loading='lazy' alt="chart" src={before_image} />
          )}
          {/* TODO: Replace svg image assets */}
          {before_image.childImageSharp && (
            <Img alt="chart" fixed={before_image.childImageSharp.fixed} />
          )}
        </div>
        <div>
          <Heading4>After</Heading4>
          {after_image && (
            <img loading='lazy' alt="chart" src={after_image} />
          )}
          {after_image.childImageSharp && (
            <Img alt="chart" fixed={after_image.childImageSharp.fixed} />
          )}
        </div>
      </div>
      <Label className="report__label">{label}</Label>
    </UpriseReportWrapper>
  )
}

export default UpriseReport

UpriseReport.propTypes = {
  title: PropTypes.string.isRequired
}
UpriseReport.defaultTypes = {
  title: PropTypes.string.isRequired
}
