import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { PrimaryButton } from '../../styles/buttons'
import { Row, Col } from '../../styles/grid'
import { TextInput } from '../../styles/inputs'
import { addContact } from '../../utils/apiCall'

const SubscribeWrapper = Styled.div`
  max-width: 570px;
  margin: auto;
`

function Subscribe({ blok }) {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  return (
    <SubscribeWrapper>
      <form onSubmit={event => event.preventDefault()}>
        <Row>
          {blok.firstName && <Col className="col-md-6">
            <TextInput
              value={firstName}
              onChange={({ target: { value } }) => setFirstName(value)}
              id="firstName"
              label="First Name"
              isRequired
            />
          </Col>}
          {blok.lastName && <Col className="col-md-6">
            <TextInput
              value={lastName}
              onChange={({ target: { value } }) => setLastName(value)}
              id="lastName"
              label="Last Name"
              isRequired
            />
          </Col>}
        </Row>
        <Row>
          <Col className="col-6">
            <TextInput
              value={email}
              type="email"
              onChange={({ target: { value } }) => setEmail(value)}
              id="email"
              label="Email Address"
              isRequired
            />
          </Col>
        </Row>
        <Row className="mgn-t-20">
          <Col>
            <PrimaryButton
              onClick={() => {
                // TODO: Add validation
                addContact({
                  email,
                  attributes: {
                    FIRSTNAME: firstName,
                    LASTNAME: lastName
                  }
                })
              }}
              large
            >
              {' '}
              Sign Up
            </PrimaryButton>
          </Col>
        </Row>
      </form>
    </SubscribeWrapper>
  )
}

export default Subscribe

Subscribe.propTypes = {
  title: PropTypes.string.isRequired
}
Subscribe.defaultTypes = {
  title: PropTypes.string.isRequired
}
