import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import { Col } from '../../styles/grid'
import { backgrounds, primary, extended } from '../../constants/colors'
import { logger } from '../../utils'
import { Heading2, BodyText } from '../../styles/text'

function useCost() {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetSheet1Row {
        edges {
          node {
            employees
            id
            cost
          }
        }
      }
    }
  `)
  // Get cost data
  const { allGoogleSheetSheet1Row } = data
  let costMap = {}
  allGoogleSheetSheet1Row.edges.forEach(({ node }) => {
    costMap[node.employees] = node.cost
  })
  return costMap
}

const PricingSliderWrapper = Styled.div`
  justify-content: center;
  & .price-info {
  }

  & .rangeslider {
    background-color: ${backgrounds.fadedPurple};
    box-shadow: none;
    margin-top: 70px;
    margin-bottom: 100px;
  }

  & .rangeslider-horizontal .rangeslider__fill {
    background-color: ${primary.purple};
  }

  & .rangeslider__labels .rangeslider__label-item {
    font-family: 'Proxima Nova';
    font-size: 18px;
    top: 8px;
    color: ${extended.charcoal.one};
  }

  & .rangeslider .rangeslider__handle {
    border: none;
    background: none;
    box-shadow: none;
    &::after {
      background-color: ${primary.purple};
    }
  }
  & 

  @media (min-width: 1024px) {
  }
`

function PricingSlider({ label }) {
  const [employees, setEmployees] = React.useState(10)
  const costMap = useCost()

  logger(employees)

  return (
    <PricingSliderWrapper className="row">
      <Col className="col-lg-9">
        <div className="price-info">
          <Heading2 className="price">{`$ ${costMap[employees]}`}</Heading2>
          <BodyText textCenter>{label}</BodyText>
        </div>
        <Slider
          min={10}
          max={1000}
          step={1}
          value={employees}
          tooltip={true}
          format={v => `${v} users`}
          labels={{
            10: `10`,
            1000: `1000`
          }}
          onChange={value => setEmployees(value)}
        />
      </Col>
    </PricingSliderWrapper>
  )
}

export default PricingSlider

PricingSlider.propTypes = {
  label: PropTypes.string.isRequired
}
PricingSlider.defaultProps = {
  label: `per employee / month`
}
