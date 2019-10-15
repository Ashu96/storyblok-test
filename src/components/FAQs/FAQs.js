import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import Accordion from '../Accordion'
import questions from './questions'
import { primary, backgrounds, extended } from '../../constants/colors'
import { Heading4, Note } from '../../styles/text'

const FAQsWrapper = Styled.div`
  max-width: 770px;
  /* min-height: 454px; */
  margin: auto;

  & .faqs {
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
  }
`

function FAQs({ faqs, moreQuestions }) {
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
      <div className="faqs">
        {defaultQuestions.map(question => (
          <React.Fragment key={question.id}>
            <Accordion {...question} />
            {question.id < defaultQuestions.length - 1 && (
              <div className="hr" />
            )}
          </React.Fragment>
        ))}
      </div>

      {moreQuestions && <MoreQuestions />}
    </FAQsWrapper>
  )
}

export default FAQs

FAQs.propTypes = {
  faqs: PropTypes.string.isRequired,
  moreQuestions: PropTypes.string.isRequired
}
FAQs.defaultProps = {
  faqs: '',
  moreQuestions: false
}

const MoreQuestionsWrapper = Styled.div`
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
  padding: 24px;
  background-color: ${extended.purple.five};

  & .question {
    margin-bottom: 8px;
  }

  & .answer {
    & span {
      color: ${primary.purple};
      font-family: 'Proxima Nova Semibold';      
    }
  }
`

function MoreQuestions() {
  return (
    <MoreQuestionsWrapper>
      <div className="question">
        <Heading4 bold>More questions?</Heading4>
      </div>
      <div className="answer">
        <Note color={extended.charcoal.one}>
          Reach out to our global support team. Click on the button on the
          bottom right of the screen, email us at <span>team@uprise.co</span> or
          call us on <span>1300 209 371</span>.
        </Note>
      </div>
    </MoreQuestionsWrapper>
  )
}
