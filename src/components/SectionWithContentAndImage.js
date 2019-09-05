// import React from 'react'
// import PropTypes from 'prop-types'
// import Styled from 'styled-components'
// import { navigate } from 'gatsby'
// import { Container, Row, Col } from '../styles/grid'
// import { Heading2, BodyText } from '../styles/text'
// import { PrimaryButton } from '../styles/buttons'
// import { backgrounds } from '../constants/colors'

// import Icon from './Icon'

// const SectionWithContentAndImageContainer = Styled.div`
//   background-color: ${props =>
// 		props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};

//   & .content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 40px;
//     padding-bottom: 60px;
//     text-align: center;

//     @media (min-width: 768px) {
//       align-items: start;
//       padding-right: 100px;
//       padding-top: 100px;
//       padding-bottom: 100px;
//       text-align: left;
//     }
//   }
//   & .media {
//     display: flex;
//     justify-content: center;
//     padding-top: 60px;
//     padding-bottom: 40px;

//     @media (min-width: 768px) {
//       justify-content: flex-end; 
//       padding-right: 100px;
//       padding-top: 100px;
//       padding-bottom: 100px;
//     }

//     & img {
//       max-width: 245px;
//     }
//   }
// `

// function SectionWithContentAndImage({
// 	title,
// 	body,
// 	action,
// 	bgPrimary,
// 	imageSrc
// }) {
// 	return (
// 		<SectionWithContentAndImageContainer
// 			className="container-fluid"
// 			bgPrimary={bgPrimary}
// 		>
// 			<Container>
// 				<Row>
// 					<Col className="col-lg-6">
// 						<div className="media">
// 							<img alt="" src={imageSrc} />
// 						</div>
// 					</Col>
// 					<Col className="col-lg-6">
// 						<div className="content">
// 							<Heading2 className="mgn-b-20">{title}</Heading2>
// 							<BodyText>{body}</BodyText>
// 							{action && (
// 								<PrimaryButton
// 									className="mgn-t-50"
// 									onClick={() => navigate(action.link)}
// 								>
// 									{action.label}
// 									<Icon fill={backgrounds.justWhite} />
// 								</PrimaryButton>
// 							)}
// 						</div>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</SectionWithContentAndImageContainer>
// 	)
// }

// SectionWithContentAndImage.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	body: PropTypes.string,
// 	action: PropTypes.shape({
// 		label: PropTypes.string.isRequired,
// 		link: PropTypes.string.isRequired
// 	}),
// 	bgPrimary: PropTypes.bool,
// 	imageSrc: PropTypes.string.isRequired
// }

// SectionWithContentAndImage.defaultProps = {
// 	bgPrimary: false
// }

// export default SectionWithContentAndImage
