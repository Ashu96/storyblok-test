// import React from 'react'
// import PropTypes from 'prop-types'
// import Styled from 'styled-components'
// import Img from 'gatsby-image'
// import { backgrounds } from '../constants/colors'
// import { Heading3, BodyText } from '../styles/text'

// const FeatureCardContainer = Styled.div`
//   /* width: 370px; */
//   width: auto;
//   height: 590px;
//   background-color: ${backgrounds.fadedPurple};
//   padding: 40px;
//   text-align: center;

//   margin-top: 16px;

//   & .image-container {
//     margin: 40px 0px;
//     & img {
//       height: 171px;
//     }
//   }

//   & .heading {
//     display: flex;
//     flex-direction: column;

//     margin-bottom: 64px;
//   }

//   @media (min-width: 768px) {
//     min-width: 300px;
//     height: 620px;
//   }

//   @media (min-width: 1220px) {
//     width: 345px;
//     height: 590px;
//   }
// `

// function FeatureCard({ title, media, body }) {
// 	return (
// 		<FeatureCardContainer>
// 			<Heading3>{title}</Heading3>
// 			<div className="image-container">
// 				{media && <Img fluid={media} alt={title} />}
// 			</div>
// 			<BodyText>{body}</BodyText>
// 		</FeatureCardContainer>
// 	)
// }

// export default FeatureCard

// FeatureCard.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	imageSrc: PropTypes.string,
// 	media: PropTypes.object,
// 	body: PropTypes.string.isRequired
// }
