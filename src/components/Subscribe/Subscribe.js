import React from 'react'
import { TimelineMax } from 'gsap/TweenMax'
import Styled from 'styled-components'
import { PrimaryButton } from '../../styles/buttons'
import { Row, Col } from '../../styles/grid'
import { TextInput } from '../../styles/inputs'
import { addContact, saveToDatabase } from '../../utils/apiCall'
import { semantic } from '../../constants/colors'
const SubscribeWrapper = Styled.div`
  max-width: 570px;
  margin: auto;
`

function Subscribe({ blok }) {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [label, setLabel] = React.useState('Sign up')

  const success = new TimelineMax({})
  const error = new TimelineMax({})

  React.useEffect(() => {
    success
      .to(`#subscribe__primary`, 0.2, {
        backgroundColor: semantic.success
      })
      .pause()

    error
      .to(`#subscribe__primary`, 0.2, {
        backgroundColor: semantic.error
      })
      .pause()
    }, [success, error])
    console.log(`ENV: ${process.env.NODE_ENV}`)
    
  return (
    <SubscribeWrapper>
      <form
        onSubmit={event => {
          event.preventDefault()
          // TODO: Add validation
          addContact({
            email,
            attributes: {
              FIRSTNAME: firstName,
              LASTNAME: lastName
            },
            listIds: [4]
          })
            .then(res => res.json())
            .then(res => {
              console.log({ res })
              if (res.id) {
                // Success
                setLabel('Thank you!')
                success.play()
                saveToDatabase(email, {
                  firstName,
                  lastName
                })
              } else if (res.code === 'duplicate_parameter') {
                setLabel('Email is already subscribed!')
                error.play()
              } else {
                // something went wrong
                setLabel('Something went wrong!')
                error.play()
              }
            })
            .catch(error => console.log(`Error: ${error}`))
        }}
      >
        <Row>
          {blok.firstName && (
            <Col className="col-md-6">
              <TextInput
                value={firstName}
                onChange={({ target: { value } }) => setFirstName(value)}
                id="firstName"
                label="First Name"
                isRequired
              />
            </Col>
          )}
          {blok.lastName && (
            <Col className="col-md-6">
              <TextInput
                value={lastName}
                onChange={({ target: { value } }) => setLastName(value)}
                id="lastName"
                label="Last Name"
                isRequired
              />
            </Col>
          )}
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
              id="subscribe__primary"
              large
              disabled={label === 'Thank you!'}
            >
              {label}
            </PrimaryButton>
          </Col>
        </Row>
      </form>
    </SubscribeWrapper>
  )
}

export default Subscribe

// Subscribe.propTypes = {
//   title: PropTypes.string.isRequired
// }
// Subscribe.defaultTypes = {
//   title: PropTypes.string.isRequired
// }
