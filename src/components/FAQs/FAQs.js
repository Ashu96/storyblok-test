import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Accordion from '../Accordion'
import questions from './questions'
import {extended} from '../../constants/colors'

const FAQsWrapper = Styled.div`
  max-width: 770px;
  /* min-height: 454px; */
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
  background-color: #ffffff;

  padding: 12px;

  & hr {
    border-color: ${extended.purple.four};
  }

  @media (min-width: 768px) {
    padding: 24px;
  }
`

function FAQs() {
  return (
    <FAQsWrapper>
      {questions.map(question => (
        <React.Fragment key={question.id}>
          <Accordion {...question}/>
          {question.id < questions.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </FAQsWrapper>
  )
}

export default FAQs

FAQs.propTypes = {
  title: PropTypes.string.isRequired
}
FAQs.defaultTypes = {
  title: PropTypes.string.isRequired
}
