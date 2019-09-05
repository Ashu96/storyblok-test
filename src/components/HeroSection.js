// import { useStaticQuery, navigate, graphql } from 'gatsby'
// import React from 'react'
// import Styled from 'styled-components'
// import Img from 'gatsby-image'
// import { OutLineButton, PrimaryButton } from '../styles/buttons'
// import { backgrounds } from '../constants/colors'
// import { Heading1, Heading4, BodyText } from '../styles/text'
// import { extractQueryData } from '../utils'

// const HeroContentContainer = Styled.div`
//   background-color: ${props =>
// 		props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};
//   text-align: ${props => (props.splitScreen ? 'left' : 'center')};
//   padding-top: 100px;
//   padding-bottom: ${props => (props.noMedia ? '0px' : '100px')};

//   & .hero__heading {
//     display: flex;
//     flex-direction: ${props => (props.splitScreen ? 'row' : 'column')}
//     flex-wrap: wrap;
//   }

//   & .hero__content {
//     display: flex;
//     flex-direction: column;
//     align-items: ${props => (props.splitScreen ? 'start' : 'center')};;
//     flex: 0 0 100%;
//     max-width: 100%;
    
//     & p {
//       @media (min-width: 768px) {
//         padding: ${props =>
// 					props.splitScreen ? '0px 25% 0px 0px' : '0px 20%'};
//       }
//     }

//     @media (min-width: 768px) {
//       justify-content: center;
//       flex: ${props => (props.splitScreen ? '0 0 50%' : '0 0 100%')};
//       max-width: ${props => (props.splitScreen ? '50%' : '100%')};
//     }
//   }


//   & .hero__cta-container {
//     margin-top: 40px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;

//     & button {
//       width: 100%;

//       &:first-child {
//         margin-bottom: 16px; 
//       }
//     }

//     @media (min-width: 768px) {
//       flex-direction: row;
//       justify-content: center;
//       width: auto;
//       & button {
//         width: auto;
//       }
//       & button:first-child {
//         margin: 0px;
//         margin-right: 16px;
//       }
//     }
//   }

//   & .hero__image-container {
//     margin-top: 50px;
//     margin-bottom: 20px;
//     & > div {
//       /* min-height: 300px; */
//     }
//     img {
//       max-width: 100%;
//       /* min-height: 300px; */
//     }
//     width: 100%;
//     @media (min-width: 768px) {
//       flex: ${props => (props.splitScreen ? '0 0 50%' : '0 0 100%')};
//       max-width: ${props => (props.splitScreen ? '50%' : '100%')};
//     }
//   }
// `

// function HeroSection({ id, bgPrimary }) {
// 	const data = useStaticQuery(graphql`
// 		{
// 			allHeroSection: allStrapiHerosection {
// 				edges {
// 					node {
// 						id
// 						strapiId
// 						title
// 						subTitle
// 						body
// 						splitScreen
// 						action {
// 							primary {
// 								label
// 								link
// 							}
// 							secondary {
// 								label
// 								link
// 							}
// 						}
// 						image {
// 							childImageSharp {
// 								fluid(maxWidth: 1160) {
// 									...GatsbyImageSharpFluid
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	const node = extractQueryData({
// 		data: data.allHeroSection,
// 		id
// 	})

// 	if (!node) {
// 		return null
// 	}

// 	const { title, subTitle, body, image, action, splitScreen } = node

// 	const noMedia = !image

// 	return (
// 		<HeroContentContainer
// 			className="container-fluid"
// 			bgPrimary={bgPrimary}
// 			splitScreen={splitScreen}
// 			noMedia={noMedia}
// 		>
// 			<div className="container">
// 				<div className="row">
// 					<div className="col">
// 						<div className="hero__heading" s>
// 							<div className="hero__content">
// 								<Heading1 className="text--semi-bold mgn-b-10">
// 									{title}
// 								</Heading1>
// 								<Heading4 className="text--brand mgn-b-20">{subTitle}</Heading4>
// 								<BodyText>{body}</BodyText>
// 								<div className="hero__cta-container">
// 									{action.primary && (
// 										<PrimaryButton
// 											onClick={() => navigate(action.primary.link)}
// 										>
// 											{action.primary.label}
// 										</PrimaryButton>
// 									)}
// 									{action.secondary && (
// 										<OutLineButton
// 											onClick={() => navigate(action.secondary.link)}
// 										>
// 											{action.secondary.label}
// 										</OutLineButton>
// 									)}
// 								</div>
// 							</div>
// 							{image && (
// 								<div className="hero__image-container">
// 									{image && (
// 										<Img fluid={image.childImageSharp.fluid} alt={'hero'} />
// 									)}
// 								</div>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</HeroContentContainer>
// 	)
// }

// export default HeroSection
