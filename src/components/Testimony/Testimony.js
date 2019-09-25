import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import Styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import { BodyText } from '../../styles/text'
import { backgrounds, secondary } from '../../constants/colors'

const TestimonyWrapper = Styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};

  padding: 35px 40px;
  margin: auto;
  margin-bottom: 32px;
  
  & .message {
    min-height: 168px
    margin-bottom: 32px;

    display: flex;
    align-items: center;
  }

  & .from {
    color: ${backgrounds.white};
  }

  & .comma {
    position: absolute;
    top: -20px;
    left: 25px;
  }
`

function Testimony({ message, from, backgroundColor }) {
  const data = useStaticQuery(graphql`
    {
      purple: file(relativePath: { eq: "purple.png" }) {
        childImageSharp {
          fixed(width: 52) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      electricBlue: file(relativePath: { eq: "electricBlue.png" }) {
        childImageSharp {
          fixed(width: 52) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      electricPurple: file(relativePath: { eq: "electricPurple.png" }) {
        childImageSharp {
          fixed(width: 52) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let image = 'purple'
  if (backgroundColor === '#39aeff') {
    image = 'electricBlue'
  } else if (backgroundColor === '#9db4ff') {
    image = 'electricPurple'
  }


  return (
    <TestimonyWrapper backgroundColor={backgroundColor}>
      <div className='comma'>
        <Img fixed={data[image].childImageSharp.fixed} alt=''/>
      </div>
      <BodyText className="message" color={backgrounds.white}>
        {message}
      </BodyText>
      <div className="from">
        <ReactMarkDown source={from} />
      </div>
    </TestimonyWrapper>
  )
}

export default Testimony

Testimony.propTypes = {
  message: PropTypes.string.isRequired
}
Testimony.defaultProps = {
  message: 'Liked it',
  backgroundColor: secondary.electricBlue
}
