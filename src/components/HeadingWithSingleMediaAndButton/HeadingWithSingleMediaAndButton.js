import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import Icon from '../Icon'
import { backgrounds, primary } from '../../constants/colors'
import { Heading2, ContentWrapper } from '../../styles/text'
import { getButton, navigateTo } from '../../utils'

const HeadingWithSingleMediaAndButtonWrapper = Styled.div`

  & .content {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.splitScreen ? 'flex-start' : 'center')};

    & p {
      text-align: ${props => (props.splitScreen ? 'left' : 'center')};
      width: 100%;
    }

    & h2 {
      text-align: ${props => (props.splitScreen ? 'left' : 'center')};
      margin-bottom: 20px;
    }

    & .media {
      margin-top: 60px;

      & img {
        width: 100%;
        max-width: 570px;
      }
    }

    & .markdown {
      margin-bottom: 40px;
      & p {
        margin-bottom: 0px;
      }
    }

    & .action {
      width: 100%;
    }

    @media (min-width: 768px) {
      & h2 {
        padding: ${props =>
          props.splitScreen ? '0px' : `0px ${props.paddingHorizontal}`};
      }

      & .with-padding {
        padding: ${props =>
          props.splitScreen ? '0px' : `0px ${props.paddingHorizontal}`};
      }

      & .action {
        width: auto;
      }

      & .action--link {
        padding-left: 0px;
      }
    }
  }

`

function HeadingWithSingleMediaAndButton({
  title,
  image,
  body,
  action,
  paddingHorizontal,
  splitScreen
}) {
  const [primaryAction] = action
  const Button = getButton(primaryAction && primaryAction.type)

  return (
    <HeadingWithSingleMediaAndButtonWrapper
      splitScreen={splitScreen}
      paddingHorizontal={paddingHorizontal}
    >
      <div className="content">
        <Heading2 className="mgn-b-20">{title}</Heading2>
        {image && (
          <div className="media">
            <img loading="lazy" src={image} alt="" />
            {/* <Img fluid={image.childImageSharp.fluid} /> */}
          </div>
        )}
        {body && (
          <ContentWrapper className="with-padding markdown">
            <ReactMarkDown source={body} />
          </ContentWrapper>
        )}
        {primaryAction && (
          <Button
            className={`action ${
              primaryAction.type === 'LINK' ? 'action--link' : ''
            }`}
            onClick={() => navigateTo(primaryAction.link)}
          >
            {primaryAction.label}
            {primaryAction.withIcon && (
              <Icon
                fill={
                  primaryAction.type === 'PRIMARY'
                    ? backgrounds.white
                    : primary.purple
                }
              />
            )}
          </Button>
        )}
      </div>
    </HeadingWithSingleMediaAndButtonWrapper>
  )
}

export default HeadingWithSingleMediaAndButton

HeadingWithSingleMediaAndButton.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  body: PropTypes.string,
  action: PropTypes.array,
  splitScreen: PropTypes.bool,
  paddingHorizontal: PropTypes.string
}
