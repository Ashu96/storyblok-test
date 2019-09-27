import React from 'react'
import SingleMediaWithCaptionAndParagraph from './SingleMediaWithCaptionAndParagraph'
import { SectionWrapper } from '../../styles/grid'

function Wrapper(props) {
  return (
    <SectionWrapper containerProps={{ style: { padding: '50px 15px' } }}>
      <SingleMediaWithCaptionAndParagraph {...props.blok} />
    </SectionWrapper>
  )
}

export default Wrapper
