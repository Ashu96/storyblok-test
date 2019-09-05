// import { graphql, useStaticQuery } from 'gatsby'
// import React from 'react'
// import Styled from 'styled-components'
// import orderBy from 'lodash/orderBy'
// import Step from './step'
// import { Heading1 } from '../styles/text'

// const TourContentContainer = Styled.div`
//   /* margin-top: 120px;
//   margin-bottom: 120px; */
//   margin: 60px 0px;

//   @media (min-width: 1200px) {
//     h1 {
//       padding: 0 25%;
//     }
//   }

//   flex-direction: column;
//   & button {
//     margin-right: 16px;
//   }

//   & .steps {
//     margin-top: 148px;
//     & .row:nth-child(2n) {
//       flex-direction: row-reverse;
//     }   
//   }
// `

// function TourSection({ id }) {
// 	const data = useStaticQuery(graphql`
// 		{
// 			allStepSections: allStrapiStepsection {
// 				edges {
// 					node {
// 						id
// 						showCurve
// 						strapiId
// 						title
// 						steps {
// 							id
// 							order
// 							showStepNumber
// 							title
// 							body
// 							image {
// 								childImageSharp {
// 									fluid(maxWidth: 485) {
// 										...GatsbyImageSharpFluid
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	if (!data) {
// 		return null
// 	}

// 	const { allStepSections } = data

// 	const currentData = allStepSections.edges.filter(
// 		edge => edge.node.strapiId === id.trim()
// 	)

// 	const { node } = currentData && currentData.length && currentData[0]
// 	if (!node) {
// 		return null
// 	}

// 	const { title, steps } = node
// 	return (
// 		<div
// 			className="container-fluid"
// 			style={{
// 				borderBottom: '1px solid #cecbfc',
// 				borderTop: '1px solid #cecbfc'
// 			}}
// 		>
// 			<div className="container">
// 				<div className="row">
// 					<div className="col">
// 						<TourContentContainer className="d-flex justify-content-center align-items-center">
// 							<Heading1 textCenter>{title}</Heading1>
// 							<div className="steps">
// 								{orderBy(steps, ['order'], ['asc']).map(step => {
// 									return (
// 										<Step
// 											key={step.id}
// 											title={step.title}
// 											body={step.body}
// 											stepNumber={step.order}
// 											showStepNumber={step.showStepNumber}
// 											imageSrc={step.image.publicURL}
// 											image={step.image.childImageSharp.fluid}
// 										/>
// 									)
// 								})}
// 							</div>
// 						</TourContentContainer>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default TourSection
