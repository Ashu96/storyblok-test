import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { backgrounds } from '../../constants/colors'
import { Heading3, BodyText } from '../../styles/text'

const StaffMemberCardWrapper = Styled.div`
  width: 350px;
  min-height: 431px;
  border-radius: 10px;
  box-shadow: ${props =>
    props.bgPrimary ? 'none' : '0 4px 10px 0 rgba(219, 221, 227, 0.5)'};
  background-color: ${props =>
    props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};

  /* padding: 73px 77px 24px 79px; */
  padding: 35px;
  text-align: ${props => props.alignHorizontal};

  margin: auto;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100%;
    max-width: 220px;
    height: 150px;
    margin-bottom: 36px;
  }

  & .name {
    margin-bottom: 8px;
    width: 100%;
  }

  & .title {
    min-height: 84px;
  }

  @media (min-width: 999px) and (max-width: 1200px) {
    width: 300px;
    padding: 40px;
  }
`

function StaffMemberCard({ blok }) {
  const { name, title, media, bgPrimary, alignHorizontal } = blok
  return (
    <StaffMemberCardWrapper
      bgPrimary={bgPrimary}
      alignHorizontal={alignHorizontal}
    >
      <img loading="lazy" src={media} alt={name} />
      <Heading3 className="name">{name}</Heading3>
      <BodyText className="title">{title}</BodyText>
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
