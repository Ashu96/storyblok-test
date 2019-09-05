import React from 'react'
import Components from './components.js'
import SbEditable from 'storyblok-react'
import { SectionWrapper, Row, Col } from '../styles/grid'
import { backgrounds, extended } from '../constants/colors'

function Grid(props) {
  console.log({ grid: props })
  console.log('********************************************')
  const splitScreen = props.blok.columns_in_row * 1 === 2
  const cols = `col-md-${12 / props.blok.columns_in_row}`
  const {
    paddingTop,
    paddingBottom,
    borderTop,
    borderBottom,
    bgPrimary
  } = props.blok
  return (
    <SbEditable content={props.blok}>
      <SectionWrapper
        bgPrimary={bgPrimary}
        containerProps={{
          style: {
            paddingTop: paddingTop ? 100 : 0,
            paddingBottom: paddingBottom ? 100 : 0
          }
        }}
        containerFluidProps={{
          style: {
            borderTop: borderTop ? `1px solid ${extended.purple.five}` : 0,
            borderBottom: borderBottom
              ? `1px solid ${extended.purple.five}`
              : 'none',
            backgroundColor: bgPrimary
              ? backgrounds.fadedPurple
              : backgrounds.white
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
