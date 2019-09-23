import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Heading3, Heading4, Note } from '../../styles/text'
import { extended, backgrounds } from '../../constants/colors'

const CalendarCardWrapper = Styled.div`
  margin: auto;
  max-width: 469px;
  height: 278px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};

  & .label {
    background-color: ${extended.purple.five};
    padding: 20px;
  }

  & .content {
    padding: 30px 50px;

    & .title {
      margin-bottom: 16px;
    }

    & ul {
      color: ${extended.charcoal.one};
      padding-left: 20px;
      & .point {
        & p {
          display: inline-block;
        }
      }
    }
  }
`

function CalendarCard({ blok }) {
  const { title, label, points } = blok
  return (
    <CalendarCardWrapper>
      <div className="label">
        <Heading3 textCenter>{label}</Heading3>
      </div>
      <div className="content">
        <Heading4 bold className="title">
          {title}
        </Heading4>
        <ul>
          {points.split(',').map(point => (
            <li className="point">
              <Note>{point}</Note>
            </li>
          ))}
        </ul>
      </div>
    </CalendarCardWrapper>
  )
}

export default CalendarCard

CalendarCard.propTypes = {
  title: PropTypes.string.isRequired
}
CalendarCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
