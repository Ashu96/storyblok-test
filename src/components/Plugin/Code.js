import React from 'react'
import Styled from 'styled-components'
import { logger } from '../../utils'

const CodeWrapper = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function Code({ blok }) {
  React.useEffect(() => {
    logger('Effect')
    // const script = document.createElement('script')
    // document.body.appendChild(script);
    // script.onload = () => {
    //     console.log('Loaded...')
    // }
    // script.src = "https://paperform.co/__embed"
  }, [])
  logger('Render Code')
  console.count('Render')
  return <CodeWrapper dangerouslySetInnerHTML={{ __html: blok.body }}></CodeWrapper>
}

export default Code
