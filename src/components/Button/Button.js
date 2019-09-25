import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Icon from '../Icon'
import { getButton, navigateTo } from '../../utils'
import { backgrounds, primary } from '../../constants/colors'

const ButtonWrapper = Styled.div`
  display: flex;
  justify-content: ${props => props.alignHorizontal};
  & button {
    margin-bottom: 24px;
    width: 100%;
  }

  & .button--with-image {
    width: 100%;
    padding: 0px;
  }

  @media (min-width: 479px) {
    & button {
      width: 'auto'
    }
  }
`

function Button({ type, label, link, withIcon, alignHorizontal = 'center' }) {
  const data = useStaticQuery(graphql`
    {
      googlePlay: file(relativePath: { eq: "googlePlay.png" }) {
        childImageSharp {
          fixed(width: 155) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appStore: file(relativePath: { eq: "appStore.png" }) {
        childImageSharp {
          fixed(width: 155) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const withImage =
    link.includes('https://play.google.com') ||
    link.includes(
      'https://apps.apple.com/au/app/uprise-mental-resilience/id1203493898'
    )

  const image = link.includes('https://play.google.com')
    ? 'googlePlay'
    : 'appStore'

  const Button = getButton(withImage ? 'LINK' : type)

  return (
    <ButtonWrapper alignHorizontal={alignHorizontal} withImage={withImage}>
      <Button
        onClick={() => navigateTo(link)}
        className={withImage ? 'button--with-image' : ''}
      >
        {label}
        {withIcon && (
          <Icon
            fill={type === 'PRIMARY' ? backgrounds.white : primary.purple}
          />
        )}
        {withImage && (
          <Img fixed={data[image].childImageSharp.fixed} alt="app store" />
        )}
      </Button>
    </ButtonWrapper>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  withIcon: PropTypes.bool
}
Button.defaultProps = {
  label: 'button',
  withIcon: false
}
