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
        </head>
        <body>
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
