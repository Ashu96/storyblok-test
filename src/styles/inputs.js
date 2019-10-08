import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Styled from 'styled-components'
import { primary, extended, backgrounds } from '../constants/colors'

const TextInputContainer = Styled.div`
/**  floating-Label style start **/
.floating-label {
  font-family: ${props =>
    props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
  position: relative;
  margin-bottom: 20px;
}
.floating-input,
.floating-select {
  font-family: ${props =>
    props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
  font-size: 16px;
  line-height: 20px;
  padding: 4px 4px;
  display: block;
  width: 100%;
  height: 42px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${extended.purple.five};
}

.floating-input:focus,
.floating-select:focus {
  outline: none;
  border-bottom: 2px solid ${primary.purple};
}

label {
  /* opacity: ${props => (props.hasValue ? 1 : 0)}; */
  font-family: ${props =>
    props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
  color: ${extended.charcoal.three};
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: ${props => (props.hasValue ? '-14px' : '5px')};
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-input::placeholder {
  font-family: ${props =>
    props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
  font-size: 16px;
  color: ${extended.charcoal.three};
}

.floating-input:focus ~ label {
  opacity: 1;
  top: -14px;
  font-size: 12px;
  color: ${primary.purple};
}

.floating-select:focus ~ label,
.floating-select:not([value='']):valid ~ label {
  top: -14px;
  font-size: 12px;
  color: ${primary.purple};
}

/* Placeholder doesn't work in IE11 */
/* .floating-input:placeholder-shown ~ label {
  opacity: 0;
} */

/* .floating-input:not(:placeholder-shown) ~ label {
  opacity: 1;
  top: -14px;
  font-size: 12px;
  color: ${primary.purple};
} */

/* active state */
.floating-input:focus ~ .bar:before,
.floating-input:focus ~ .bar:after,
.floating-select:focus ~ .bar:before,
.floating-select:focus ~ .bar:after {
  width: 50%;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.floating-textarea {
  min-height: 30px;
  max-height: 260px;
  overflow: hidden;
  overflow-x: hidden;
}

/* highlighter */
.highlight {
  position: absolute;
  height: 50%;
  width: 100%;
  top: 15%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
.floating-input:focus ~ .highlight,
.floating-select:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* animation */
@-webkit-keyframes inputHighlighter {
  from {
    background: ${primary.purple};
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: ${primary.purple};
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: ${primary.purple};
  }
  to {
    width: 0;
    background: transparent;
  }
}

/**  floating-Label style start **/
`

export function TextInput({ id, label, isRequired, value, ...restProps }) {
  return (
    <TextInputContainer hasValue={!!value.length}>
      <div className="floating-label">
        <input
          className="floating-input"
          type="text"
          id={id}
          required={isRequired}
          value={value}
          {...restProps}
        />
        <label htmlFor={id}>
          {label} {isRequired ? ' * ' : ''}
        </label>
      </div>
    </TextInputContainer>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
}

TextInput.defaultProps = {
  isRequired: false
}

const SelectContainer = Styled.div`
  margin-bottom: 16px;
`

const colourStyles = {
  control: styles => ({
    ...styles
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log({ data })
    data.color = extended.blue.three
    // const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? primary.purple
        : isFocused
        ? backgrounds.fadedPurple
        : null,
      color: isDisabled
        ? extended.charcoal.three
        : isSelected
        ? backgrounds.white
        : isFocused
        ? primary.charcoal
        : extended.charcoal.one,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : extended.charcoal.four)
      }
    }
  }
}

export function SelectMenu({
  id,
  label,
  options,
  value,
  onChange,
  ...restProps
}) {
  return (
    <SelectContainer>
      <Select
        {...restProps}
        // defaultValue={options[2]}
        label="Single select"
        options={options}
        styles={colourStyles}
        value={options.find(option => option.value === value)}
        onChange={option => {
          console.log({ option })
          onChange({ target: { value: option.value, id } })
        }}
      />
    </SelectContainer>
  )
}

SelectMenu.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  isRequired: PropTypes.bool
}

SelectMenu.defaultProps = {
  isRequired: false,
  options: [
    {
      id: 99,
      value: '',
      label: 'Choose from a legal service area'
    },
    {
      id: 0,
      value: 'Any speciality',
      label: 'Any speciality'
    },
    {
      id: 1,
      value: 'Personal injury',
      label: 'Personal injury'
    },
    {
      id: 2,
      value: 'Family law',
      label: 'Family law'
    },
    {
      id: 3,
      value: 'Employment law',
      label: 'Employment law'
    },
    {
      id: 4,
      value: 'Business law',
      label: 'Business law'
    }
  ]
}

const CheckBoxWrapper = Styled.div`
  margin-bottom: 20px;
  & input {
    margin-right: 8px;
  }

`

export function CheckBox({ id, label, required, ...restProps }) {
  return (
    <CheckBoxWrapper>
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        {...restProps}
      />
      <label className="form-check-label" htmlFor={id}>
        {required && '*'}
        {label}
      </label>
    </CheckBoxWrapper>
  )
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

CheckBox.defaultProps = {
  label: `I have read the Participant Information Sheet or it has been provided to
  me in a language that I understand`
}
