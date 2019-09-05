// import React from 'react'
// import PropTypes from 'prop-types'
// import Styled from 'styled-components'
// import Img from 'gatsby-image'
// import { Heading3, Note } from '../styles/text'
// import { PrimaryButton } from '../styles/buttons'
// import { extended, backgrounds } from '../constants/colors'

// const SupportCardContainer = Styled.div`
//   /* width: 370px; */
//   /* height: 856px; */
//   width: auto;

//   margin: 0px auto;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
//   background-color: ${backgrounds.white};

//   padding: ${props => (props.large ? '30px 50px' : '15px 25px')};
//   /* padding: 35px 45px; */

//   & .media {
//     margin-bottom: 32px;
//   }
  
//   & .title {
//     margin-bottom: 16px;
//   }

//   & .content {
//     margin-bottom: 32px;
//     min-height: ${props => (props.isContentShort ? '120px' : '360px')}
//   }

//   & .action {
//     width: 100%;
//   }

//   @media (min-width: 768px) {
//     width: ${props => (props.large ? '540px' : '350px')};
//     padding: ${props => (props.large ? '60px 100px' : '35px 45px')};
//   }
// `

// function SupportCard({ title, media, content, action, large }) {
// 	const isContentShort = content.length < 210
// 	return (
// 		<SupportCardContainer isContentShort={isContentShort} large={large}>
// 			{media && <Img className="media" fluid={media} alt="" />}
// 			<Heading3 className="title">{title}</Heading3>
// 			<Note className="content" color={extended.charcoal.one}>
// 				{content}
// 			</Note>
// 			<PrimaryButton large className="action">
// 				{action.primary.label}
// 			</PrimaryButton>
// 		</SupportCardContainer>
// 	)
// }

// export default SupportCard

// SupportCard.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	content: PropTypes.string.isRequired,
// 	media: PropTypes.object.isRequired,
// 	action: PropTypes.object.isRequired
// }

// SupportCard.defaultProps = {
// 	title: `Upskill’ Resilience Program`,
// 	content: `Book a phone consultation with a lawyer and get legal advice.
//    The initial session is completely free
//    and subsequent sessions can be approved by your company if needed.`,
// 	media: {
// 		base64:
// 			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAECUlEQVQ4yz2Te0zbVRTHfzIT4x8mJuq/GhMWE2OIiZsmuDlwLyMYZ/QvY7ZJ4mPzD+MWiSi6acYmBEaQuScbVWBBrPIadFAKgxZKH/QFpS0t9EHfLbS00Ofvd75eQLjJyU3uPfdzzvmeezhDGNzm0oWEAtMKHuP+XzPe1CuOdVRaVqh3PirY2B42R8ltDNGoPkDVhoBQuOOrdqFga3dusxiM9uxc6gK544tpDNnXwVtjgE8AXBnAsgpY44A3z4wH9H5kdF6qM3hij2++m16kgu1MQtt0fZie14eo154CJBonzv3QgNf3H89/UlGZVy6sCLYYyBQioUOa5Ae16dxsEGBBoXFDoVnKP73JUDqwCy3SBviwF0C7RMO/WlSaf/GF16hwbzG9VPgGPvrgJM...',
// 		aspectRatio: 1.304093567251462,
// 		src:
// 			'/static/e7796f87fc0d76b89c855f30136c463d/5586e/31421b530d263dd63dfdc948408136be.png',
// 		srcSet:
// 			'/static/e7796f87fc0d76b89c855f30136c463d/f06f0/31421b530d263dd63dfdc948408136be.png 71w,\n/static/e7796f87fc0d76b89c855f30136c463d/98b41/31421b530d263dd63dfdc948408136be.png 143w,\n/static/e7796f87fc0d76b89c855f30136c463d/5586e/31421b530d263dd63dfdc948408136be.png 285w,\n/static/e7796f87fc0d76b89c855f30136c463d/0b0cc/31421b530d263dd63dfdc948408136be.png 428w,\n/static/e7796f87fc0d76b89c855f30136c463d/1bf8f/31421b530d263dd63dfdc948408136be.png 446w',
// 		sizes: '(max-width: 285px) 100vw, 285px'
// 	},
// 	action: {
// 		primary: {
// 			label: 'Sign up for Upskill',
// 			link: '/login'
// 		}
// 	}
// }
