import React from 'react'
// import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { backgrounds } from '../../constants/colors'
import { PrimaryButton } from '../../styles/buttons'
import { Row, Col } from '../../styles/grid'
import { TextInput } from '../../styles/inputs'
import { saveToGoogleSheet } from '../../utils/apiCall'

const ContactFormWrapper = Styled.div`
  width: 100%;
  max-width: 570px;
  
  margin: auto;

  & .fields {
    padding: 16px;
    border-radius: ${props => (props.whiteBox ? '10px' : '0px')};
    box-shadow: ${props =>
      props.whiteBox ? '0 2px 4px 0 rgba(219, 221, 227, 0.5)' : 'none'};
    background-color: ${props =>
      props.whiteBox ? backgrounds.white : 'inherit'};
    margin-bottom: 24px;
  }

  & button {
    margin-top: 36px;
  }
`

function ContactForm({ blok }) {
  const { whiteBox } = blok
  const [label, setLabel] = React.useState('Submit')
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
    <ContactFormWrapper whiteBox={whiteBox}>
      <form
        onSubmit={event => {
          event.preventDefault()
          saveToGoogleSheet(contactInfo)
            .then(res => res.json())
            .then(res => {
              console.log({ res })
              setLabel('Thank you!')
            })
            .catch(error => {
              console.error(error)
              setLabel('Something went wrong!')
            })
        }}
      >
        <div className="fields">
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
        </div>
        <div className="action">
          <Row>
            <Col>
              <PrimaryButton disabled={label === 'Thank you!'} large>
                {label}
              </PrimaryButton>
            </Col>
          </Row>
        </div>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm

// ContactForm.propTypes = {
//   title: PropTypes.string.isRequired
// }
// ContactForm.defaultTypes = {
//   title: PropTypes.string.isRequired
// }
