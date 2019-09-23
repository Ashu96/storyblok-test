import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const PaperFormWrapper = Styled.div`
  & .paperform {
    width: 100%;
    height: 700px;
  }
`

function PaperForm({ blok }) {
  const { formId } = blok

  React.useEffect(() => {
    const script = document.createElement('script')
    document.body.appendChild(script);
    script.onload = () => {
        console.log('Loaded...')
    }
    script.src = "https://paperform.co/__embed"
  }, [])

  return (
    <PaperFormWrapper>
        <div data-paperform-id={formId}></div>
    </PaperFormWrapper>
  )
}

export default PaperForm

PaperForm.propTypes = {
  title: PropTypes.string.isRequired
}
PaperForm.defaultTypes = {
  title: PropTypes.string.isRequired
}
