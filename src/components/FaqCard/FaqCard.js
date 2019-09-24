import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import {BodyText, Note} from '../../styles/text'
import {extended, primary, backgrounds} from '../../constants/colors'


const FaqCardWrapper = Styled.div`
  max-width: 300px;
  min-height: 286px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};
  padding: 26px 30px;

  margin: auto;
  margin-bottom: 32px;

  & .question {
    margin-bottom: 20px;
    color: ${primary.charcoal};
  }
`

function FaqCard({
  question,
  answer
}) {
	return (
		<FaqCardWrapper>
      <BodyText className='question' bold>{question}</BodyText>
      <Note className='answer' color={extended.charcoal.one}>{answer}</Note>
		</FaqCardWrapper>
	)
}

export default FaqCard

FaqCard.propTypes = {
	title: PropTypes.string.isRequired
}
FaqCard.defaultTypes = {
	title: PropTypes.string.isRequired
}