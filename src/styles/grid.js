import React from 'react'
import PropTypes from 'prop-types'
import { backgrounds } from '../constants/colors'

export function Container({ children, className, ...props }) {
	return (
		<div className={`container ${className}`} {...props}>
			{children}
		</div>
	)
}

Container.defaultProps = {
	className: ''
}

export function Row({ children, className, ...props }) {
	return (
		<div className={`row ${className}`} {...props}>
			{children}
		</div>
	)
}

Row.defaultProps = {
	className: ''
}

export function Col({ children, className, ...props }) {
	return (
		<div className={`col-12 ${className}`} {...props}>
			{children}
		</div>
	)
}

Col.defaultProps = {
	className: ''
}

export function SectionWrapper({
	children,
	bgPrimary,
	containerFluidProps,
	containerProps
}) {
	return (
		<div
			className="container-fluid"
			style={
				bgPrimary
					? { backgroundColor: backgrounds.fadedPurple }
					: { backgroundColor: backgrounds.white }
			}
			{...containerFluidProps}
		>
			<Container {...containerProps}>{children}</Container>
		</div>
	)
}

SectionWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	// className: PropTypes.string,
	containerFluidProps: PropTypes.object,
	containerProps: PropTypes.object
}
