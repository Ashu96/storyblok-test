import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import { Heading4, Label } from '../../styles/text'
import { extended } from '../../constants/colors'

const AccordionWrapper = Styled.div`
  /* width: 770px; */
  /* margin: auto; */
  /* height: 440px; */
  --height: 120px;

  & .question-container {
    position: relative;
  }

  & .icon {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  & .answer-container {
    position: relative;
    opacity: 0;
    height: 1px;
    /* transform: scaleY(0); */
    animation: ${props => (props.isOpen ? 'fadeIn' : 'fadeOut')} 250ms ease-in;
    animation-fill-mode: forwards;
    /* animation: fadeIn 750ms ease-in; */
  }

  & .question {
    margin-bottom: 12px;
  }
  & .answer {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    --height: 50px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 1px;
      /* transform: scaleY(0); */
    }
    to {
      opacity: 1;
      height: var(--height);
      /* transform: scaleY(1); */
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      height: var(--height);
      /* transform: scaleY(1); */
    }
    to {
      opacity: 0;
      height: 1px;
      /* transform: scaleY(0); */
    }
  }
`

function Accordion({ question, answer }) {
  const [isOpen, toggleOpen] = React.useState(false)

  return (
    <AccordionWrapper isOpen={isOpen}>
      <div className="question-container">
        <Heading4 className="question" bold>
          {question}
        </Heading4>
        <Icon
          className="icon"
          name="chevron"
          rotate={isOpen ? -90 : 90}
          fill={extended.electricPurple.one}
          onClick={() => toggleOpen(!isOpen)}
        />
      </div>
     {true && <div className="answer-container">
        <Label className="answer" color={extended.charcoal.one}>
          {answer}
        </Label>
      </div>}
    </AccordionWrapper>
  )
}

export default Accordion

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}
Accordion.defaultProps = {
  question: 'How long are your contracts?',
  answer: `Employee access to the Uprise digital platform is renewed annually.
   Coaching support hours are pre-purchased and do expire.
   We review usage and availability quarterly to ensure a seamless delivery of support for employees. `
}
