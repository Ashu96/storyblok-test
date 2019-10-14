import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import Accordion from '../Accordion'
import questions from './questions'
import { backgrounds, extended } from '../../constants/colors'

const FAQsWrapper = Styled.div`
  max-width: 770px;
  /* min-height: 454px; */
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};

  padding: 12px;

  & .hr {
    width: 100%;
    height: 1px;
    background-color: ${extended.purple.four};
    margin: 12px 0px;
    /* border-top: 1px solid ${backgrounds.fadedPurple}; */
  }

  @media (min-width: 768px) {
    padding: 24px;
  }
`

function FAQs({ faqs = '' }) {
  const formattedFAQS = faqs.split(/\r?\n/).filter(item => item.length)
  const questionAnswers = []

  let key = 0
  for (let i = 0; i < formattedFAQS.length; i = i + 2) {
    const entry = {
      id: key++,
      question: formattedFAQS[i],
      answer: formattedFAQS[i + 1]
    }
    questionAnswers.push(entry)
  }

  const defaultQuestions = questionAnswers.length ? questionAnswers : questions

  return (
    <FAQsWrapper>
      {defaultQuestions.map(question => (
        <React.Fragment key={question.id}>
          <Accordion {...question} />
          {question.id < defaultQuestions.length - 1 && <div className="hr" />}
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
