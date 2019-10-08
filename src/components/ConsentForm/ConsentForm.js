import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { extended } from '../../constants/colors'
import { PrimaryButton, OutLineButton } from '../../styles/buttons'
import { Row, Col } from '../../styles/grid'
import { TextInput, CheckBox } from '../../styles/inputs'
import { navigateTo } from '../../utils'

const ConsentFormWrapper = Styled.div`
  padding: 0px 48px;

  & label {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
  }

  & .label {
    margin-bottom: 24px;
  }

  & .action-download {
    margin-bottom: 32px;
    & button:first-child {
      margin: 0px auto;
    }
  }

  & .hr {
    width: 100%;
    height: 2px;
    background-color: ${extended.purple.four};
    margin-bottom: 24px;
  }
`

function ConsentForm({ to }) {
  const [consent, setConsent] = React.useState(false)
  const [download, setDownload] = React.useState(false)
  const [optForEmail, setOptForEmail] = React.useState(false)
  const [email, setEmail] = React.useState('')

  return (
    <ConsentFormWrapper>
      <form
        onSubmit={event => {
          event.preventDefault()
          navigateTo(to)
        }}
      >
        <div className="label">
          <label>
            I understand I am being asked to provide consent to participate in
            this research study:
          </label>
        </div>
        <CheckBox
          id="language"
          label="I have read the Participant Information Sheet or it has been provided to
  me in a language that I understand"
          required={true}
          checked={consent}
          onChange={() => setConsent(!consent)}
        />
        <CheckBox
          id="consent"
          label="I provide my consent for the information collected about me to be used for the purpose of this research study only."
          required={true}
          checked={consent}
          onChange={() => setConsent(!consent)}
        />
        <CheckBox
          id="questions"
          label="I understand that if necessary I can ask questions and the research team will respond to my questions."
          required={true}
          checked={consent}
          onChange={() => setConsent(!consent)}
        />
        <CheckBox
          id="participate"
          label="I freely agree to participate in this research study as described and understand that I am free to withdraw at any timeduring the study and withdrawal will not affect my relationship with any of the named organisations and/or research team members;"
          required={true}
          checked={consent}
          onChange={() => setConsent(!consent)}
        />

        <CheckBox
          id="opt-email"
          label="I would like to receive a copy of the study results via email or post. (optional)"
          required={true}
          checked={optForEmail}
          onChange={() => setOptForEmail(!optForEmail)}
        />
        {optForEmail && (
          <TextInput
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            id="email"
            label="Email Address"
            isRequired
            type="email"
          />
        )}
        <CheckBox
          id="download"
          label="I understand that I can download a copy of this consent form"
          required={true}
          checked={download}
          onChange={() => setDownload(!download)}
        />

        <Row className="action-download">
          <Col className="col-lg-3">
            <OutLineButton disabled={!download}>Download</OutLineButton>
          </Col>
          <Col className="col-lg-3">
            <OutLineButton
              disabled={!download}
              onClick={() => {
                window && window.print()
              }}
            >
              Print
            </OutLineButton>
          </Col>
        </Row>
        <div className="hr" />
        <Row>
          <Col>
            <PrimaryButton disabled={!consent || !download}>
              Submit
            </PrimaryButton>
          </Col>
        </Row>
      </form>
    </ConsentFormWrapper>
  )
}

export default ConsentForm

ConsentForm.propTypes = {
  title: PropTypes.string.isRequired
}
ConsentForm.defaultTypes = {
  title: PropTypes.string.isRequired
}
