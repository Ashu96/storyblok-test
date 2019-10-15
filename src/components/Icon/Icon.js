import React from 'react'
import PropTypes from 'prop-types'
// import Styled from 'styled-components'

import ICON_LIST from './IconList'

// const IconWrapper = Styled.div``

function Icon({ name, fill, width, rotate, ...props }) {
  const Svg = ICON_LIST[name || 'tick']
  const styles = rotate ? { transform: `rotate(${rotate}deg)` } : {}

  return <Svg fill={fill} width={width} style={styles} {...props} />
}

export default Icon

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string
}

Icon.defaultProps = {
  name: 'chevron',
  width: '24px',
  fill: '#000'
}
