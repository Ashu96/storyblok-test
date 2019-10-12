import React from 'react'
import Styled from 'styled-components'
import { PrimaryButton } from '../../styles/buttons'
import { useScript } from '../../utils'

const BirdSeedWrapper = Styled.div`
  & .plugin {
    width: 100%;
    height: 700px;
  }
  & button {
    margin: 0px auto;
  }
`

function BirdSeed() {
  const [loadScript, setLoadScript] = React.useState(false)

  useScript('https://app.birdseed.io/widget.js', {
    shouldLoad: loadScript
  })

  return (
    <BirdSeedWrapper>
      {!loadScript && (
        <PrimaryButton onClick={() => setLoadScript(true)}>
          See Chat
        </PrimaryButton>
      )}
      <div
        id="birdseed-widget-container"
        data-token="35e834e3e52a148f397759a97fc5fe39"
      ></div>
    </BirdSeedWrapper>
  )
}

export default BirdSeed
