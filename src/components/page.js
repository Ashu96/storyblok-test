import React from 'react'
import Components from './components.js';
import './layout.css'

const Page = (props) => (
  <React.Fragment>
    {props.blok.body && props.blok.body.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
  </React.Fragment>
)

export default Page