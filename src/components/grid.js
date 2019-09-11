import React from 'react'
import Components from './components.js'
import SbEditable from 'storyblok-react'
import { SectionWrapper, Row, Col } from '../styles/grid'
import { backgrounds, extended } from '../constants/colors'

function Grid(props) {
  const splitScreen = props.blok.columns_in_row * 1 === 2
  const cols = `col-md-${12 / props.blok.columns_in_row}`
  const {
    paddingTop,
    paddingBottom,
    borderTop,
    borderBottom,
    isPaddingHorizontal,
    paddingHorizontal,
    paddingVertical,
    backgroundColor
  } = props.blok
  return (
    <SbEditable content={props.blok}>
      <SectionWrapper
        containerProps={{
          style: {
            paddingTop: paddingTop ? paddingVertical : 0,
            paddingBottom: paddingBottom ? paddingVertical : 0,
            paddingLeft: isPaddingHorizontal ? paddingHorizontal : 0,
            paddingRight: isPaddingHorizontal ? paddingHorizontal : 0
          }
        }}
        containerFluidProps={{
          style: {
            borderTop: borderTop ? `1px solid ${extended.purple.five}` : 0,
            borderBottom: borderBottom
              ? `1px solid ${extended.purple.five}`
              : 'none',
            backgroundColor: backgroundColor && backgroundColor.trim()
          }
        }}
      >
        <Row>
          {props.blok.columns.map(blok => (
            <Col className={cols}>
              {React.createElement(Components(blok.component), {
                key: blok._uid,
                blok: blok,
                splitScreen
              })}
            </Col>
          ))}
        </Row>
      </SectionWrapper>
    </SbEditable>
  )
}

export default Grid
