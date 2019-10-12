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
          <style
            dangerouslySetInnerHTML={{
              __html: `
            /* Embedded Styles for Bird Seed Widget */
            /* https://birdseed.io */
            
            #bsd-iframe-widget {
              max-width: 460px;
              position: fixed;
              right: 0;
              bottom: 0;
              height: 100% !important;
              border: none;
              z-index: 9999998;
              margin-bottom: 0;
            }
            
            #bsd-iframe-widget.bsd-iframe-open {
              min-height: 300px !important;
              max-height: 770px !important;
              width: 460px !important;
            }
            
            #bsd-iframe-widget.bsd-iframe-close {
              width: 120px !important;
              height: 120px !important;
            }
            
            #bsd-iframe-widget.bsd-iframe-mobile.bsd-iframe-close {
              width: 120px !important;
              height: 120px !important;
            }
            
            
            @media screen and (max-width: 820px) {
              #bsd-iframe-widget.bsd-iframe-mobile.bsd-iframe-open {
                border-radius: 0;
            
                max-width: 100% !important;
                max-height: 100% !important;
                min-height: 300px !important;
                bottom: 0;
                right: 0;
            
                height: 100% !important;
                width: 100% !important;
            
                z-index: 1000000000;
            
              }
            }
            
            #bsd-iframe-button {
              right: -0;
            }
            
            /*#bsd-iframe-widget.bsd-iframe-mobile {
              height: 120px !important;
              width: 120px !important;
            }
            */
          `
            }}
          ></style>
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-69911631-4"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                <!-- Global site tag (gtag.js) - Google Analytics -->
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-69911631-4');
              `
            }}
          ></script>
        </head>
        <body style={{ visibility: 'hidden' }}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            type="text/javascript"
            src="https://app.birdseed.io/widget.js"
          ></script>
          <div
            id="birdseed-widget-container"
            data-token="35e834e3e52a148f397759a97fc5fe39"
          ></div>
        </body>
      </html>
    )
  }
}
