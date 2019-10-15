import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import Button from '../Button'
import Heading from '../Heading'
import PricingSlider from '../PricingTable/PricingSlider'
import { backgrounds, extended } from '../../constants/colors'
import { Heading2 } from '../../styles/text'

const PricingCardWrapper = Styled.div`
  width: auto;
  min-height: ${props => (props.fullWidth ? 'auto' : '584px')};
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};
  margin: ${props =>
    props.alignHorizontal === 'center'
      ? '0px auto'
      : props.alignHorizontal === 'flex-start'
      ? '0px auto 0px 0px'
      : '0px 0px 0px auto'};
  margin-bottom: 30px;

  & .header {
    height: 80px;
    background-color: ${extended.purple.five};
    padding: 20px 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }


  & .body {
    padding: 30px;
    & .price {
      font-family: 'Proxima Nova';
      font-size: ${props => (props.pricingSlider ? '76px' : '42px')};
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #7d60ff;

      margin-bottom: ${props =>
        props.pricingSlider ? '0px' : props.singleItem ? '40px' : '30px'};
    }
    & .markdown {
      & p {
        font-family: 'Proxima Nova';
        color: ${extended.charcoal.one};
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: ${props =>
          props.pointIcon === 'dot' ? '12px' : '16px'};
      }
    }

    & .actions {
      & button {
        max-width: 370px;
      }
      & .first {
        margin-bottom: 16px;
      }
      & .second {
        margin-bottom: 0px;
      }
    }
   
    & .features {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 32px;
      & .feature {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    width: ${props =>
      props.fullWidth ? '100%' : props.singleItem ? '570px' : '370px'};
    margin-bottom: ${props => (props.fullWidth ? '30px' : '0px')};

    & .body {
      padding: ${props => (props.singleItem ? '24px 70px 40px' : '40px')};
    
      & .features {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 32px;
        & .feature {
          flex: ${props => (props.fullWidth ? '0 0 33.3333%' : '0 0 100%')};
          max-width: ${props => (props.fullWidth ? '33.3333%' : '100%')};
        }
      }
    }
  }
`

function PricingCard({
  canGoFullBleed,
  title,
  price,
  actions,
  pointIcon,
  pricingSlider,
  features,
  fullWidth,
  sheetName,
  alignHorizontal
}) {
  const [first, second] = actions
  const singleItem = canGoFullBleed
  console.log({ alignHorizontal })
  return (
    <PricingCardWrapper
      pointIcon={pointIcon}
      fullWidth={fullWidth}
      singleItem={singleItem}
      pricingSlider={pricingSlider}
      alignHorizontal={alignHorizontal}
    >
      <div className="header">
        <Heading2 textCenter={!fullWidth}>{title}</Heading2>
      </div>
      <div className="body">
        {price && !pricingSlider && <div className="price">{price}</div>}
        {features && (
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
        )}
        {pricingSlider && <PricingSlider label={price} sheetName={sheetName} />}

        <div className="actions">
          {first && <Button className="first" {...first} />}
          {second && <Button className="second" {...second} />}
        </div>
      </div>
    </PricingCardWrapper>
  )
}

export default PricingCard

PricingCard.propTypes = {
  title: PropTypes.string.isRequired
}
PricingCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
