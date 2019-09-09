import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { backgrounds } from '../../constants/colors'
import { PrimaryButton } from '../../styles/buttons'
import { Heading2, BodyText } from '../../styles/text'
import { Row, Col } from '../../styles/grid'
import { TextInput } from '../../styles/inputs'
import { saveToGoogleSheet } from '../../utils/apiCall'

const ContactFormWrapper = Styled.div`
  width: 100%;
  max-width: 570px;
  /* border-radius: 10px; */
  /* box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5); */
  /* background-color: ${backgrounds.white}; */
  margin: auto;
  padding: 16px;
  margin-top: 72px;

  & button {
    margin-top: 36px;
  }
`

function ContactForm() {
  const [contactInfo, setContactInfo] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    referrer: ''
  })

  const handleOnChange = ({ target: { value, id, name } }) => {
    setContactInfo({ ...contactInfo, [id]: value })
  }

  return (
    <ContactFormWrapper>
      <form onSubmit={event => event.preventDefault()}>
        <Row>
          <Col className="col-md-6">
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.firstName}
              id="firstName"
              label="First Name"
              isRequired
            />
          </Col>
          <Col className="col-md-6">
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.lastName}
              id="lastName"
              label="Last Name"
              isRequired
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.company}
              id="company"
              label="Company"
              isRequired
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.email}
              id="email"
              label="Email Address"
              isRequired
              type="email"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.phone}
              id="phone"
              label="Phone Number"
              isRequired
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.employees}
              id="employees"
              label="Number of Employees"
              isRequired
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextInput
              onChange={handleOnChange}
              value={contactInfo.referrer}
              id="referrer"
              label="How did you hear about Uprise?"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PrimaryButton large onClick={() => saveToGoogleSheet(contactInfo)}>
              {' '}
              Submit
            </PrimaryButton>
          </Col>
        </Row>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm

ContactForm.propTypes = {
  title: PropTypes.string.isRequired
}
ContactForm.defaultTypes = {
  title: PropTypes.string.isRequired
}
