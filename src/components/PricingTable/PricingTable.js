import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Icon from '../Icon'
import { Heading2, Note } from '../../styles/text'
import { PrimaryButton } from '../../styles/buttons'
import { primary, extended, backgrounds } from '../../constants/colors'
import { PLAN_TYPES, PLANS } from '../../constants/pricingPlans'

const types = Object.keys(PLAN_TYPES)

const PricingTableWrapper = Styled.div`
  & table {
    width: 100%;
  }
  & tr {
    border-radius: 10px;
    border: solid 1px #edeafa;
    background-color: #ffffff;
  }

  & tr.empty {
    background-color: ${backgrounds.fadedPurple};
    height: 54px;
  }

  & td {
    padding: 16px 30px;
    max-width: 310px;

    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};

  }

  & td.feature-name {
    font-weight: 600;
    text-align: left;
  }

  & td.feature-value {
    text-align: center;
  }

`

function PricingTable() {
  const startUpFeatures = PLANS[PLAN_TYPES.Startup].features

  return (
    <PricingTableWrapper>
      <PricingTableHead />
      <table>
        <tbody>
          {startUpFeatures.map((feature, index) => {
            return (
              <React.Fragment>
                <tr key={feature.id}>
                  <td className="feature-name">{feature.name}</td>
                  {types.map(type => {
                    let value = PLANS[type].features[index].value

                    return (
                      <td className="feature-value">
                        {typeof value === 'string' ? (
                          value
                        ) : (
                          <Icon name="tick" />
                        )}
                      </td>
                    )
                  })}
                </tr>
                {index === 3 && <tr className="empty"></tr>}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </PricingTableWrapper>
  )
}

export default PricingTable

PricingTable.propTypes = {
  title: PropTypes.string.isRequired
}
PricingTable.defaultTypes = {
  title: PropTypes.string.isRequired
}

const PricingTableHeadWrapper = Styled.div`
  display: flex;
  margin-bottom: 50px;

  & .card {
    width: 215px;
    height: 257px;
    border: solid 1px #edeafa;
    background-color: #ffffff;
    padding: 32px 30px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
      width: 100%;
    }

    & .name {
      font-size: 30px;
      margin-bottom: 20px;
    }

    & .price {
      color: ${primary.purple};
    }
    & p {
      margin-bottom: 20px;
    }
  }

  & .card:first-child {
    flex-grow: 1;
  }
`

function PricingTableHead() {
  return (
    <PricingTableHeadWrapper>
      <div className='card'>
        <img src={require('../../images/group-8.svg')} alt=''/>
      </div>
      {types.map(type => {
        const plan = PLANS[type]

        return (
          <div className="card">
            <Heading2 className='name'>{plan.name}</Heading2>
            <Heading2 className='price'>${plan.price}</Heading2>
            <Note color={extended.charcoal.one}>{plan.paymentCycle}</Note>
            <PrimaryButton>Contact us</PrimaryButton>
          </div>
        )
      })}
    </PricingTableHeadWrapper>
  )
}

// export default PricingTableHead;
