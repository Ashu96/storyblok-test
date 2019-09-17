import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { backgrounds } from '../../constants/colors'
import { TextInput, SelectMenu } from '../../styles/inputs'
import { PrimaryButton } from '../../styles/buttons'
import { Row, Col } from '../../styles/grid'

const LegalSupportWrapper = Styled.div`
  width: 100%;
  max-width: 570px;
  
  margin: auto;

  & .fields {
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.5);
    background-color: ${backgrounds.white};
    margin-bottom: 24px;
  }

  & .action {
    /* padding: 16px;     */
    margin-bottom: 20px;
  }
`

function LegalSupport() {
  const [contactInfo, setContactInfo] = React.useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    serviceArea: '',
    reason: ''
  })

  const handleOnChange = ({ target: { value, id, name } }) => {
    setContactInfo({ ...contactInfo, [id]: value })
  }

  return (
    <LegalSupportWrapper>
      <form onSubmit={event => event.preventDefault()}>
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
                label="Company Name"
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
              <SelectMenu
                onChange={handleOnChange}
                value={contactInfo.serviceArea}
                id="serviceArea"
                label="Choose from a legal service area*"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextInput
                onChange={handleOnChange}
                value={contactInfo.reason}
                id="reason"
                label="Tell us the reason for your appointment* (be as specific as possible)"
                isRequired
              />
            </Col>
          </Row>
        </div>
        <div className="action">
          <Row>
            <Col>
              <PrimaryButton large onClick={() => console.log({ contactInfo })}>
                {' '}
                Submit
              </PrimaryButton>
            </Col>
          </Row>
        </div>
      </form>
    </LegalSupportWrapper>
  )
}

export default LegalSupport

LegalSupport.propTypes = {
  title: PropTypes.string.isRequired
}
LegalSupport.defaultTypes = {
  title: PropTypes.string.isRequired
}
