import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const PluginWrapper = Styled.div`
  & .plugin {
    width: 100%;
    height: 700px;
  }
`

function Plugin({ blok }) {
  const { url } = blok

  React.useEffect(() => {
    // eslint-disable-next-line
    Calendly.initInlineWidget({
      url,
      parentElement: document.getElementById('uprise-calendar'),
      prefill: {},
      utm: {}
     });
  }, [url])

  return (
    <PluginWrapper>
      <div className='plugin' id="uprise-calendar"/>
    </PluginWrapper>
  )
}

export default Plugin

Plugin.propTypes = {
  title: PropTypes.string.isRequired
}
Plugin.defaultTypes = {
  title: PropTypes.string.isRequired
}
