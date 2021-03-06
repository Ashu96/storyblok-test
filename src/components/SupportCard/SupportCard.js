import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
// import Img from 'gatsby-image'
import { Heading3, Note } from '../../styles/text'
// import { PrimaryButton } from '../../styles/buttons'
import { extended, backgrounds } from '../../constants/colors'
import { getButton, navigateTo } from '../../utils'

const SupportCardWrapper = Styled.div`
  width: auto;

  margin: 0px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};
  margin-bottom: 32px;

  padding: ${props => (props.large ? '30px 50px' : '15px 25px')};
  /* padding: 35px 45px; */

  & .media {
    margin-bottom: 32px;
    width: 100%;
  }

  & .title {
    margin-bottom: 16px;
  }

  & .content {
    margin-bottom: 32px;
    min-height: ${props => (props.isContentShort ? '120px' : '360px')}
  }

  & .action {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: ${props => (props.large ? '540px' : '350px')};
    padding: ${props => (props.large ? '60px 80px' : '35px 45px')};
  }
`

function SupportCard({ blok }) {
  const { title, media, content, action, large } = blok
  const [button] = action
  const Button = button && getButton(button.type)

  return (
    <SupportCardWrapper isContentShort={content.length < 300} large={large}>
      {media && <img loading="lazy" className="media" src={media} alt="" />}
      {/* {media && <Img className="media" fluid={media} alt="" />} */}
      <Heading3 className="title">{title}</Heading3>
      <Note className="content" color={extended.charcoal.one}>
        {content}
      </Note>

      {button && (
        <Button large key={button._uid} onClick={() => navigateTo(button.link)}>
          {button.label}
        </Button>
      )}
    </SupportCardWrapper>
  )
}

export default SupportCard

SupportCard.propTypes = {
  title: PropTypes.string.isRequired
}
SupportCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
