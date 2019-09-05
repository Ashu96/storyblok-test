// import React from 'react'
// import PropTypes from 'prop-types'
// import Styled from 'styled-components'
// import { navigate } from 'gatsby'
// import Img from 'gatsby-image'
// import { Container, Row, Col } from '../styles/grid'
// import { Heading1, Heading4, BodyText } from '../styles/text'
// import { PrimaryButton, OutLineButton } from '../styles/buttons'

// const HeroContentContainer = Styled.div`
//   text-align: center;
//   margin-top: 47px;

//   & .hero__cta-container {
//     margin-top: 40px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     & button {
//       width: 75%;
//       &:first-child {
//         margin-bottom: 16px; 
//       }
//     }

//     @media (min-width: 768px) {
//       flex-direction: row;
//       justify-content: center;
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
//     img {
//       max-width: 100%;
//     }
//   }
// `

// function HeroContent({ title, subTitle, body, actions, image, imageSrc }) {
// 	return (
// 		<HeroContentContainer className="container-fluid">
// 			<Container>
// 				<Row>
// 					<Col>
// 						<div className="hero__heading">
// 							<Heading1 className="mgn-b-10">{title}</Heading1>
// 							<Heading4 className="mgn-b-20">{subTitle}</Heading4>
// 							<BodyText>{body}</BodyText>
// 							<div className="hero__cta-container">
// 								{actions.primary && (
// 									<PrimaryButton onClick={() => navigate(actions.primary.link)}>
// 										{actions.primary.label}
// 									</PrimaryButton>
// 								)}
// 								{actions.secondary && (
// 									<OutLineButton
// 										onClick={() => navigate(actions.secondary.link)}
// 									>
// 										{actions.secondary.label}
// 									</OutLineButton>
// 								)}
// 							</div>
// 							<div className="hero__image-container">
// 								{imageSrc && <img alt="hero" src={imageSrc} />}
// 								{image && <Img alt="hero" fluid={image} />}
// 							</div>
// 						</div>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</HeroContentContainer>
// 	)
// }

// HeroContent.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	subTitle: PropTypes.string,
// 	body: PropTypes.string,
// 	actions: PropTypes.shape({
// 		primary: PropTypes.shape({
// 			label: PropTypes.string.isRequired,
// 			link: PropTypes.string.isRequired
// 		}).isRequired,
// 		secondary: PropTypes.shape({
// 			label: PropTypes.string.isRequired,
// 			link: PropTypes.string.isRequired
// 		})
// 	}),
// 	image: PropTypes.object,
// 	imageSrc: PropTypes.string
// }

// HeroContent.defaultProps = {
// 	actions: {
// 		primary: {
// 			label: 'Book a demo',
// 			link: () => navigate('/')
// 		}
// 	}
// }

// export default HeroContent
