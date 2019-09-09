import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import {backgrounds} from '../../constants/colors'
import {Heading3, BodyText} from '../../styles/text'

const StaffMemberCardWrapper = Styled.div`
  width: 350px;
  height: 431px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};

  padding: 73px 77px 24px 79px;
  text-align: center;

  & img {
    width: : 220px;
    height: 220px;
    margin-bottom: 36px;
  }
`

function StaffMemberCard({ blok }) {
  const {name, title, media } = blok
	return (
		<StaffMemberCardWrapper>
      <img src={media} alt={name}/>
      <Heading3>{name}</Heading3>
      <BodyText>{title}</BodyText>
		</StaffMemberCardWrapper>
	)
}

export default StaffMemberCard

StaffMemberCard.propTypes = {
	title: PropTypes.string.isRequired
}
StaffMemberCard.defaultTypes = {
	title: PropTypes.string.isRequired
}