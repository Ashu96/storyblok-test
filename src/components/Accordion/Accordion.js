import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import { Heading4, Label } from '../../styles/text'
import { extended } from '../../constants/colors'

const AccordionWrapper = Styled.div`
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 1px;
    }
    100% {
      opacity: 1;
      height: ${props => `${props.height}px`};
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      height: ${props => `${props.height}px`};
    }
    100% {
      opacity: 0;
      height: 1px;
    }
  }
`

function Accordion({ question, answer, id }) {
  const [isOpen, toggleOpen] = React.useState(false)
  const [height, setHeight] = React.useState(120)

  React.useEffect(() => {
    const container = document.querySelector(`.answer-${id}`)
    if (container) {
      const { height } = container.getBoundingClientRect()
      setHeight(height + 24)
    }
  }, [isOpen, id])

  return (
    <AccordionWrapper isOpen={isOpen} height={height}>
      <div className="question-container" onClick={() => toggleOpen(!isOpen)}>
        <Heading4 className="question" bold>
          {question}
        </Heading4>
        <Icon
          className="icon"
          name="chevron"
          rotate={isOpen ? -90 : 90}
          fill={extended.electricPurple.one}
        />
      </div>
      <div className={`answer-container`}>
        <Label className={`answer answer-${id}`} color={extended.charcoal.one}>
          {answer}
        </Label>
      </div>
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
