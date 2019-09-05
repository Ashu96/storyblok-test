// import React from 'react'
// import Styled from 'styled-components'
// import { PrimaryButton } from '../styles/buttons'
// import { Heading2, BodyText } from '../styles/text'
// import { TextInput } from '../styles/inputs'

// const SubscribeContainer = Styled.div`
//   padding-top: 80px;
//   padding-bottom: 120px;
//   & .subscribe__header {
//     text-align: center;

//     & h2 {
//       margin-bottom: 16px;
//     }
//   }

//   & form {
//     width: 100%;
//     max-width: 570px;
//   }
// `

// function SubscribeSection() {
// 	return (
// 		<SubscribeContainer classNameName="container-fluid">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col">
// 						<div className="subscribe__header">
// 							<Heading2>Subscribe</Heading2>
// 							<BodyText>
// 								Sign up with your email address to receive news and updates.
// 							</BodyText>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col">
// 						<div className="mgn-t-40 d-flex justify-content-center">
// 							<form>
// 								<div className="row">
// 									<div className="col-6">
// 										<TextInput id="firstName" label="First Name" isRequired />
// 									</div>
// 									<div className="col-6">
// 										<TextInput id="lastName" label="Last Name" isRequired />
// 									</div>
// 								</div>

// 								<div className="row">
// 									<div className="col">
// 										<TextInput id="email" label="Email Address" />
// 									</div>
// 								</div>
// 								<div className="row mgn-t-20">
// 									<div className="col">
// 										<PrimaryButton large> Sign Up</PrimaryButton>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</SubscribeContainer>
// 	)
// }

// export default SubscribeSection
