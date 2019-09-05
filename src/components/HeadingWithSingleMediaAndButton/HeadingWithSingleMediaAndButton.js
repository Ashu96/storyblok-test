import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import Icon from '../Icon'
import { backgrounds, primary } from '../../constants/colors'
import { Heading2, BodyText } from '../../styles/text'
import { getButton } from '../../utils'

const HeadingWithSingleMediaAndButtonWrapper = Styled.div`

  & .content {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.splitScreen ? 'flex-start' : 'center')};

    & p {
      text-align: ${props => (props.splitScreen ? 'left' : 'center')};
    }

    & h2 {
      padding: 0 20%;
      padding: ${props => (props.splitScreen ? '0px' : '0px 20%')};
      text-align: ${props => (props.splitScreen ? 'left' : 'center')};
      margin-bottom: 24px;
    }

    & .media {
      margin-top: 60px;

      & img {
        width: 100%;
        max-width: 570px;
      }
    }

    & .action {
      margin-top: 50px
    }

    & .with-padding {
      padding: 0px 15%;
      padding: ${props => (props.splitScreen ? '0px' : '0px 15%')};
    }
  }

`

function HeadingWithSingleMediaAndButton({ blok, splitScreen }) {
  const { title, image, body, action } = blok
  console.log({ action })
  const [primaryAction] = action
  console.log({ primaryAction })
  const Button = getButton(primaryAction && primaryAction.type)

  return (
    <HeadingWithSingleMediaAndButtonWrapper splitScreen={splitScreen}>
      <div className="content">
        <Heading2 className="mgn-b-20">{title}</Heading2>
        {image && (
          <div className="media">
            <img src={image} alt="" />
            {/* <Img fluid={image.childImageSharp.fluid} /> */}
          </div>
        )}
        {body && <BodyText className="with-padding">{body}</BodyText>}
        {primaryAction && (
          <Button className="action" onClick={() => navigate(primaryAction.link)}>
            {primaryAction.label}
            <Icon
              fill={
                primaryAction.type === 'PRIMARY' ? backgrounds.white : primary.purple
              }
            />
          </Button>
        )}
      </div>
    </HeadingWithSingleMediaAndButtonWrapper>
  )
}

export default HeadingWithSingleMediaAndButton

HeadingWithSingleMediaAndButton.propTypes = {
  title: PropTypes.string.isRequired
}
HeadingWithSingleMediaAndButton.defaultTypes = {
  title: PropTypes.string.isRequired
}
