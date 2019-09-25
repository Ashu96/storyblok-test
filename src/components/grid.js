import React from 'react'
import Components from './components.js'
import SbEditable from 'storyblok-react'
import { SectionWrapper, Row, Col } from '../styles/grid'
import { extended } from '../constants/colors'
import { useMobile } from '../utils'

function Grid(props) {
  const hasPath = props.blok.columns.some(col => col.component === 'path')
  const splitScreen = props.blok.columns_in_row * 1 === 2
  const cols =
    props.blok.columns_in_row >= 4
      ? `col-lg-6 col-xl-${12 / props.blok.columns_in_row}`
      : `col-lg-${12 / props.blok.columns_in_row}`
  const {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderTop,
    borderBottom,
    isPaddingHorizontal: noPaddingHorizontal,
    paddingHorizontal,
    paddingVertical,
    backgroundColor
  } = props.blok

  const containerFluid = props.blok.columns.some(
    blok => blok.component === 'Carousel'
  )
  const isMobile = useMobile()

  return (
    <SbEditable content={props.blok}>
      <SectionWrapper
        containerProps={{
          className: containerFluid ? 'container-fluid' : 'container',
          style: {
            paddingTop: paddingTop ? paddingVertical : 0,
            paddingBottom: paddingBottom ? paddingVertical : 0,
            paddingLeft:
              paddingLeft && !noPaddingHorizontal
                ? isMobile
                  ? 24
                  : paddingHorizontal
                : 0,
            paddingRight:
              paddingRight && !noPaddingHorizontal
                ? isMobile
                  ? 24
                  : paddingHorizontal
                : 0
          }
        }}
        containerFluidProps={{
          style: {
            borderTop: borderTop ? `1px solid ${extended.purple.five}` : 0,
            borderBottom: borderBottom
              ? `1px solid ${extended.purple.five}`
              : 'none',
            backgroundColor: backgroundColor && backgroundColor.trim(),
            paddingLeft: noPaddingHorizontal ? 0 : 15,
            paddingRight: noPaddingHorizontal ? 0 : 15
          }
        }}
      >
        <Row style={hasPath ? { position: 'relative' } : {}}>
          {props.blok.columns.map(blok => (
            <Col
              key={blok._uid}
              className={cols}
              style={
                blok.component === 'path'
                  ? { position: 'static' }
                  : { alignSelf: 'center' }
              }
            >
              {React.createElement(Components(blok.component), {
                key: blok._uid,
                blok: blok,
                splitScreen,
                ...blok
              })}
            </Col>
          ))}
        </Row>
      </SectionWrapper>
    </SbEditable>
  )
}

export default Grid
