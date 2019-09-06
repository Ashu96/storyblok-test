import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import Heading from '../Heading'
import { Heading2, Note, BodyText } from '../../styles/text'
import { PrimaryButton } from '../../styles/buttons'
import { primary, extended, backgrounds } from '../../constants/colors'
import { getButton } from '../../utils'

const FeaturePricingCardWrapper = Styled.div`
  width: auto;

  margin: 0px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};
  margin-bottom: 24px;

  padding: ${props => (props.large ? '30px 50px' : '15px 25px')};
  /* padding: 35px 45px; */

  & .media {
    margin-bottom: 24px;
    width: 100%;
    & img {
      width: 40px;
      height: 40px;
    }
  }

  & .title {
    margin-bottom: 16px;
  }

  & .body {
    margin-bottom: 32px;
    /* min-height: ${props => (props.isContentShort ? '120px' : '360px')} */
  }

  & .action {
    width: 100%;
    margin-bottom: 16px;
  }

  & .features {
    margin-bottom: 32px;
    & .feature {
      display: flex;
      align-items: baseline;
      & img {
        width: 12px;
        margin-right: 8px;
      }
    }
  }

  @media (min-width: 768px) {
    width: ${props => (props.large ? '540px' : '350px')};
    padding: ${props => (props.large ? '60px 100px' : '35px 45px')};
  }

`

function FeaturePricingCard({ blok }) {
  const { title, body, media, actions, features } = blok
  return (
    <FeaturePricingCardWrapper>
      <div className="media">
        <img src={media} alt="" />
      </div>
      <Heading2 className="title">{title}</Heading2>
      <Note className="body" color={extended.charcoal.one}>
        {body}
      </Note>
      <div className="features">
        {features.map(feature => {
          console.log({ feature })
          return (
            <div className="feature">
              <img
                src={require('../../images/icons/tick.svg')}
               
              />
              <Heading blok={feature} />
            </div>
          )
        })}
      </div>
      {actions.map(action => {
        const Button = getButton(action.type)
        return (
          <Button className="action">
            {action.label}
            {action.type === 'LINK' && <Icon fill={primary.purple} />}
          </Button>
        )
      })}
    </FeaturePricingCardWrapper>
  )
}

export default FeaturePricingCard

FeaturePricingCard.propTypes = {
  title: PropTypes.string.isRequired
}
FeaturePricingCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
