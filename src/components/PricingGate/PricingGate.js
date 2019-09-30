import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { SectionWrapper, Col } from '../../styles/grid'
import { navigateTo } from '../../utils'
import { addContact } from '../../utils/apiCall'
import { Heading2, BodyText, Heading4 } from '../../styles/text'
import { TextInput } from '../../styles/inputs'
import { PrimaryButton } from '../../styles/buttons'
import { backgrounds } from '../../constants/colors'

const PricingGateWrapper = Styled.div`
  width: 100%;
  height: 100vh;

  & .col-12 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .heading {
    margin-bottom: 20px;
  }

  & .body {
    margin-bottom: 40px;
  }

  & form {
    width: 770px;
    height: 215px;
    border-radius: 10px;
    box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
    background-color: #ffffff;

    padding: 40px;
    margin: 0px auto;
    margin-bottom: 120px;
  }

  & .uprise-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
      width: 24px;
    }
  }
`

function PricingGate() {
  const [email, setEmail] = React.useState('')
  return (
    <SectionWrapper
      containerFluidProps={{
        style: {
          backgroundColor: backgrounds.fadedPurple
        }
      }}
    >
      <PricingGateWrapper className="row">
        <Col>
          <Heading2 textCenter className="heading">
            To see pricing details, please enter your email below
          </Heading2>
          <BodyText textCenter className="body">
            We will not spam your email address
          </BodyText>

          <form
            onSubmit={event => {
              event.preventDefault()
              try {
                localStorage.setItem('upriseEmail', 'saved')
                addContact(email)
                navigateTo('/pricing')
              } catch (error) {
                console.log({ error })
              }
            }}
          >
            <TextInput
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
              id="email"
              label="Email Address"
              isRequired
              type="email"
            />
            <PrimaryButton large>See pricing</PrimaryButton>
          </form>

          <div className="uprise-logo">
            <img src={require('../../images/logo.webp')} alt="uprise logo" />
            <Heading4 color="#35359c">Uprise</Heading4>
          </div>
        </Col>
      </PricingGateWrapper>
    </SectionWrapper>
  )
}

export default PricingGate

PricingGate.propTypes = {
  title: PropTypes.string.isRequired
}
PricingGate.defaultTypes = {
  title: PropTypes.string.isRequired
}
