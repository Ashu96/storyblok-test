import React from 'react'
import Styled from 'styled-components'
import { useScript } from '../../utils'

const PluginWrapper = Styled.div`
  & .plugin {
    width: 100%;
    height: 700px;
  }
  & button {
    margin: 0px auto;
  }
`

function Plugin({ blok }) {
  const { url, _uid } = blok
  const [loadScript, setLoadScript] = React.useState(false)
  
  const id = `uprise-calendar-${_uid}`
  
  React.useEffect(() => {
    if (!loadScript) {
      setLoadScript(true)
    }
  }, [loadScript])

  useScript('https://assets.calendly.com/assets/external/widget.js', {
    shouldLoad: loadScript,
    onLoad: () => {
      const calendarContainer = document.getElementById(id)
      if (!calendarContainer.innerHTML) {
        // eslint-disable-next-line
        window.Calendly.initInlineWidget({
          url: `${url}?hide_event_type_details=1&&primary_color=7d60ff&&text_color=20272c`,
          parentElement: calendarContainer,
          prefill: {},
          utm: {}
        })
      }
    }
  })

  return (
    <PluginWrapper>
      <div className="plugin" id={id} />
    </PluginWrapper>
  )
}

export default Plugin
