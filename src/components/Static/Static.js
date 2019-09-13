import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { backgrounds, primary, extended } from '../../constants/colors'

const StaticWrapper = Styled.div`
  background-color: ${backgrounds.white};
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(219, 221, 227, 0.8);

  @media (min-width: 768px) {
    padding: 80px 200px;
  }

  & img {
    width: 100%;
  }

  & li {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
  }

  & p {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    text-align: justify;
    margin-bottom: 50px;
  }

  & h1, h2, h3, h4 {
    margin-bottom: 20px;
  }

  & h2 {
    font-family: 'Proxima Nova Semibold';
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};
  }

  & h3 {
    font-family: 'Proxima Nova Semibold';
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};Z
  }

  & table {
    font-family: 'Proxima Nova';
    text-align: left;
    & th {
      padding: 16px;
      color: ${primary.charcoal};
    }
    & td {
      padding: 16px;
      color: ${extended.charcoal.one};
      /* border-top: 1px solid ${extended.charcoal.three}; */
    }
  }

`

function Static({ blok }) {
  const { content } = blok
  console.log(`Content ${JSON.stringify(content)}`)
  return (
    <StaticWrapper>
      <ReactMarkdown source={content} />
    </StaticWrapper>
  )
}

export default Static

Static.propTypes = {
  title: PropTypes.string.isRequired
}
Static.defaultTypes = {
  title: PropTypes.string.isRequired
}
