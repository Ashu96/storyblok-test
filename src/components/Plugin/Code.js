import React from 'react'
import Styled from 'styled-components'
import { logger } from '../../utils'

const CodeWrapper = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function Code({ blok }) {
  const { script, body, source } = blok

  React.useEffect(() => {
    if (source) {
      const script = document.createElement('script')
      document.body.appendChild(script)
      script.onload = () => {
        logger('Loaded')
      }
      script.src = source
    } else {
      const scriptContent = script.slice(8, -9)
      window.eval(scriptContent)
    }
  }, [source, script])

  return <CodeWrapper dangerouslySetInnerHTML={{ __html: body }}></CodeWrapper>
}

export default Code
