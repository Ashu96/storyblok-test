// import React from 'react'
// import PropTypes from 'prop-types'
// import Styled from 'styled-components'
// import Report from './Report'
// import { Heading2 } from '../styles/text'
// import { Container, Row, Col } from '../styles/grid'
// import { backgrounds } from '../constants/colors'

// const ReportSectionContainer = Styled.div`
//   background-color: ${props =>
// 		props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};
//   padding-top: 60px;
//   padding-bottom: 60px;

//   @media (min-width: 768px) {
//     padding-top: 120px;
//     padding-bottom: 80px;
//   }

//   & .heading {
//     margin-bottom: 80px;
//   }
// `

// function ReportSection({ title, reports, bgPrimary }) {
// 	const [left, right] = reports

// 	return (
// 		<ReportSectionContainer bgPrimary={bgPrimary} className="container-fluid">
// 			<Container>
// 				<Row className="heading">
// 					<Col>
// 						<Heading2 textCenter>{title}</Heading2>
// 					</Col>
// 				</Row>
// 				<Row>
// 					<Col className="col-lg-6">
// 						<Report {...left} />
// 					</Col>
// 					<Col className="col-lg-6">
// 						<Report {...right} />
// 					</Col>
// 				</Row>
// 			</Container>
// 		</ReportSectionContainer>
// 	)
// }

// export default ReportSection

// ReportSection.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	reports: PropTypes.array.isRequired,
// 	bgPrimary: PropTypes.bool
// }
