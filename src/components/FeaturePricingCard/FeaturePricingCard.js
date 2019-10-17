import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import Heading from '../Heading'
import { Heading2, Heading3, Note } from '../../styles/text'
import { primary, extended, backgrounds } from '../../constants/colors'
import { getButton, navigateTo } from '../../utils'

const FeaturePricingCardWrapper = Styled.div`
  width: auto;
  /* min-height: 789px; */
  margin: 0px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};
  margin: ${props =>
    props.alignHorizontal === 'center'
      ? '0px auto'
      : props.alignHorizontal === 'flex-start'
      ? '0px auto 0px 0px'
      : '0px 0px 0px auto'};
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
    min-height: 80px;
  }

  & .price {
    margin: 20px 0px;
    & .price-money {
      font-family: 'Proxima Nova';
      font-size: 42px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #7d60ff;
    }
    & .price-label {

    }
  }

  & .body {
    margin-bottom: 32px;
    min-height: 72px;
    /* min-height: ${props => (props.isContentShort ? '120px' : '360px')} */
  }

  & .action {
    width: 100%;
    margin-bottom: 16px;
  }

  & .features {
    margin-bottom: 32px;
    min-height: 250px;
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
    width: ${props =>
      props.large ? '540px' : props.widthPrice ? '370px' : '350px'};
    padding: ${props =>
      props.large ? '60px 100px' : props.widthPrice ? '40px' : '35px 45px'};
  }

`

function FeaturePricingCard({ blok }) {
  const { title, body, media, actions, features, price, alignHorizontal } = blok
  const [formattedPrice, ...labels] = price ? price.split(' ') : []
  const label = labels && labels.join(' ')
  return (
    <FeaturePricingCardWrapper
      widthPrice={price}
      alignHorizontal={alignHorizontal}
    >
      {media && (
        <div className="media">
          <img loading="lazy" src={media} alt="" />
        </div>
      )}
      {media ? (
        <Heading2 className="title">{title}</Heading2>
      ) : (
        <Heading3 textCenter className="title">
          {title}
        </Heading3>
      )}
      {price && !media && (
        <div className="price">
          <div className="price-money">{formattedPrice}</div>
          <div className="price-label">
            <Note textCenter color={primary.purple}>
              {label}
            </Note>
          </div>
        </div>
      )}
      <Note className="body" color={extended.charcoal.one}>
        {body}
      </Note>
      <div className="features">
        {features.map(feature => {
          console.log({ feature })
          return (
            <div className="feature">
              <Heading blok={feature} />
            </div>
          )
        })}
      </div>
      {actions.map(action => {
        const Button = getButton(action.type)
        return (
          <Button className="action" onClick={() => navigateTo(action.link)}>
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
