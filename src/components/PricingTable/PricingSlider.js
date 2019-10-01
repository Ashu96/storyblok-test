import React from 'react'
// import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import { SectionWrapper, Col } from '../../styles/grid'
import { backgrounds, primary, extended } from '../../constants/colors'
import { logger } from '../../utils'
import { Heading2 } from '../../styles/text'

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
  & .price {
    font-size: 42px;
    color: ${primary.purple};
    text-align: center;
  }

  & .rangeslider {
    background-color: ${backgrounds.fadedPurple};
  }

  & .rangeslider-horizontal .rangeslider__fill {
    background-color: ${primary.purple};
  }

  & .rangeslider__labels .rangeslider__label-item {
    font-family: 'Proxima Nova';
    font-size: 16px;
    color: ${extended.charcoal.one};
  }

  @media (min-width: 1024px) {
  }
`

function PricingSlider() {
  const [employees, setEmployees] = React.useState(10)
  const costMap = useCost()

  logger(employees)

  return (
    <SectionWrapper
      containerFluidProps={{
        style: {
          backgroundColor: backgrounds.fadedPurple,
          padding: '40vh 0px'
        }
      }}
    >
      <PricingSliderWrapper className="row">
        <Col>
          <Slider
            min={10}
            max={1000}
            step={1}
            value={employees}
            tooltip={true}
            labels={{
              10: `10 Employees`,
              1000: `1000 Employees`
            }}
            onChange={value => setEmployees(value)}
          />
          <Heading2 className="price">{`$ ${costMap[employees]}`}</Heading2>
        </Col>
      </PricingSliderWrapper>
    </SectionWrapper>
  )
}

export default PricingSlider

// PricingSlider.propTypes = {
//   title: PropTypes.string.isRequired
// }
// PricingSlider.defaultTypes = {
//   title: PropTypes.string.isRequired
// }
