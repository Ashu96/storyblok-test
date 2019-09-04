import React from 'react'
import SingleMediaWithCaptionAndParagraph from './SingleMediaWithCaptionAndParagraph'
import { SectionWrapper, Row, Col } from '../../styles/grid'

function Wrapper(props) {
  console.log('********************************************')
  console.log({ wrapper: props })
  console.log('********************************************')

  return (
    <SectionWrapper containerProps={{ style: { padding: '50px 0px' } }}>
      <SingleMediaWithCaptionAndParagraph {...props.blok} />
    </SectionWrapper>
  )
}

export default Wrapper
