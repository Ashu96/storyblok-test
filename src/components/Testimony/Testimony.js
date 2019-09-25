import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import { BodyText } from '../../styles/text'
import { backgrounds, secondary } from '../../constants/colors'

const TestimonyWrapper = Styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};

  padding: 35px 40px;
  margin: auto;
  margin-bottom: 32px;
  
  & .message {
    min-height: 168px
    margin-bottom: 32px;

    display: flex;
    align-items: center;
  }

  & .from {
    color: ${backgrounds.white};
  }
`

function Testimony({ message, from, backgroundColor }) {
  return (
    <TestimonyWrapper backgroundColor={backgroundColor}>
      <BodyText className="message" color={backgrounds.white}>
        {message}
      </BodyText>
      <div className="from">
        <ReactMarkDown source={from} />
      </div>
    </TestimonyWrapper>
  )
}

export default Testimony

Testimony.propTypes = {
  message: PropTypes.string.isRequired
}
Testimony.defaultProps = {
  message: 'Liked it',
  backgroundColor: secondary.electricBlue
}
