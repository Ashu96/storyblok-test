import React from 'react'
import PropTypes from 'prop-types'

function Icon({ width, fill, rotate, ...props }) {
	const styles = rotate ? { transform: `rotate(${rotate}deg)` } : {}
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			width={width}
			fill={fill}
			style={styles}
			{...props}
		>
			<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
		</svg>
	)
}

export default Icon

Icon.propTypes = {
	width: PropTypes.string,
	fill: PropTypes.string
}

Icon.defaultProps = {
	width: '24px',
	fill: '#000'
}
