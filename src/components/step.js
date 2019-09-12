// import PropTypes from 'prop-types'
// import React from 'react'
// import Styled from 'styled-components'
// import Img from 'gatsby-image'
// import { Heading2, Note, BodyText } from '../styles/text'

// const StepContainer = Styled.div`
//   display: flex;
//   margin-bottom: 70px;
//   /* margin-bottom: 140px; */

// `

// const StepImage = Styled.div`
//   /* width: 100%;
//   display: flex;
//   justify-content: center;

//   & img {
//     width: 100%;
//     height: auto;
//     max-height: 395px;

//     @media (min-width: 768px) {
//       width: 70%;
//     }
//   } */
// `

// const StepInfo = Styled.div`
//   margin-top: 16px;

//   & p {
//     margin-bottom: 10px;
//   }

//   & h2 {
//     text-align: left;
//     margin-bottom: 20px;
//   }
// `
// function Step({ title, stepNumber, showStepNumber, body, imageSrc, image }) {
// 	return (
// 		<StepContainer className="row">
// 			<div className="col-12 col-lg-6">
// 				<StepImage>
// 					{imageSrc && <img loading='lazy' src={imageSrc} alt={title} />}
// 					{image && <Img fluid={image} alt={title} />}
// 				</StepImage>
// 			</div>
// 			<div className="col-12 col-lg-6 align-self-center">
// 				<StepInfo>
// 					{stepNumber && showStepNumber && <Note>{`STEP ${stepNumber}`}</Note>}
// 					<Heading2>{title}</Heading2>
// 					<BodyText>{body}</BodyText>
// 				</StepInfo>
// 			</div>
// 		</StepContainer>
// 	)
// }

// export default Step

// Step.propType = {
// 	title: PropTypes.string.isRequired,
// 	body: PropTypes.string.isRequired,
// 	imageSrc: PropTypes.string.isRequired,
// 	stepNumber: PropTypes.number,
// 	showStepNumber: PropTypes.bool
// }
