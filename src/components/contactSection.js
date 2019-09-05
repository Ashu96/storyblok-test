// import React from 'react'
// import Styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { backgrounds } from '../constants/colors'

// import { PrimaryButton } from '../styles/buttons'
// import { Heading2, BodyText } from '../styles/text'
// import { TextInput } from '../styles/inputs'

// const ContactContentContainer = Styled.div`
//   background-color: ${props =>
// 		props.bgPrimary ? backgrounds.fadedPurple : backgrounds.white};
//   padding-top: 80px;
//   padding-bottom: 120px;
//   & .contact__header {
//     text-align: center;

//     & h2 {
//       margin-bottom: 16px;
//     }
//   }

//   & form {
//     width: 100%;
//     max-width: 570px;
//   }
  
//   & .card {
//     /* width: 570px; */
//     /* height: 394px; */
//     width: 100%;
//     max-width: 570px;
//     border-radius: 10px;
//     box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
//     background-color: ${backgrounds.white};

//     padding: 16px;
//   }
// `

// function ContactSection({ bgPrimary }) {
// 	return (
// 		<ContactContentContainer
// 			classNameName="container-fluid"
// 			bgPrimary={bgPrimary}
// 		>
// 			<div className="container">
// 				<div className="row">
// 					<div className="col">
// 						<div className="contact__header">
// 							<Heading2>Get in touch</Heading2>
// 							<BodyText>
// 								Find out how Uprise can support your team or company
// 							</BodyText>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col">
// 						<div className="mgn-t-40 d-flex justify-content-center">
// 							<form>
// 								<div className="card">
// 									<div className="row">
// 										<div className="col-6">
// 											<TextInput id="firstName" label="First Name" isRequired />
// 										</div>
// 										<div className="col-6">
// 											<TextInput id="lastName" label="Last Name" isRequired />
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col">
// 											<TextInput id="company" label="Company" />
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col">
// 											<TextInput id="email" label="Email Address" />
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col">
// 											<TextInput id="phone" label="Phone Number" />
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col">
// 											<TextInput
// 												id="numberOfEmployees"
// 												label="Number of Employees"
// 											/>
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col">
// 											<TextInput
// 												id="source"
// 												label="How did you hear about Uprise?"
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="row mgn-t-20">
// 									<div className="col">
// 										<PrimaryButton large> Submit</PrimaryButton>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</ContactContentContainer>
// 	)
// }

// export default ContactSection

// ContactSection.propTypes = {
// 	bgPrimary: PropTypes.bool
// }

// ContactSection.defaultProps = {
// 	bgPrimary: true
// }
