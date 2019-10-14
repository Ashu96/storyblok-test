import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import Button from '../Button'
import { backgrounds, extended } from '../../constants/colors'
import { Heading2 } from '../../styles/text'

const PricingCardWrapper = Styled.div`
  width: 370px;
  min-height: 584px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};
  margin: 0px auto;

  & .header {
    height: 80px;
    background-color: ${extended.purple.five};
    padding: 20px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }


  & .body {
    padding: 40px;
    & .price {
      font-family: 'Proxima Nova';
      font-size: 42px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #7d60ff;

      margin-bottom: 30px;
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

      /* & p:before {
        content: '*';
        margin-right: 12px;
      } */
    }

    & .actions {
      & .first {
        margin-bottom: 16px;
      }
      & .second {
        margin-bottom: 0px;
      }
    }
  }
`

function PricingCard({ title, price, points, actions, pointIcon }) {
  const [first, second] = actions

  return (
    <PricingCardWrapper pointIcon={pointIcon}>
      <div className="header">
        <Heading2 textCenter>{title}</Heading2>
      </div>
      <div className="body">
        {price && <div className="price">{price}</div>}
        <ReactMarkDown className="markdown" source={points} />
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
