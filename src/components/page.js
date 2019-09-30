import React from 'react'
import Components from './components.js'
import { navigateTo } from '../utils'

import './layout.css'

function Page(props) {
  React.useEffect(() => {
    if (
      window.location &&
      window.location.pathname &&
      window.location.pathname.includes('pricing')
    ) {
      try {
        const token = localStorage.getItem('upriseEmail')
        if (!token) {
          navigateTo('/pricing-gate')
        }
      } catch (error) {
        console.log({ error })
      }
    }
  }, [])

  return (
    <React.Fragment>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok
          })
        )}
    </React.Fragment>
  )
}

export default Page
