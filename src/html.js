import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>Uprise Employee Assistance</title>
          <meta
            name="description"
            content="Uprise is a proactive and science-based Employee Assistance Program (EAP) 
provider in Australia."
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <script
            type="text/javascript"
            async
            src="https://assets.calendly.com/assets/external/widget.js"
          ></script>
          <script
            type="text/javascript"
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              function setup() {
                const body = document.querySelector('body')
                if (body) {
                  body.style.visibility = 'visible'
                }
              }
              
              window.onload = setup
        `
            }}
          />
        </head>
        <body style={{ visibility: 'hidden' }}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
