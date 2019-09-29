import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import Icon from '../Icon'
import { Heading1, Heading4, BodyText } from '../../styles/text'
import { getButton, navigateTo, VideoPlayerContext } from '../../utils'

const HeroBannerWrapper = Styled.div`

  text-align: ${props => (props.splitScreen ? 'left' : 'center')};

  & .hero__heading {
    display: flex;
    flex-direction: ${props => (props.splitScreen ? 'row' : 'column')}
    flex-wrap: wrap;
  }

  & .hero__content {
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.splitScreen ? 'start' : 'center')};;
    flex: 0 0 100%;
    max-width: 100%;
    min-height: ${props => (props.onlyCTA ? '50px' : '200px')};
    
    & h1 {
      width: 100%;
    }

    & p {
      @media (min-width: 768px) {
        padding: ${props =>
          props.splitScreen ? '0px 25% 0px 0px' : '0px 20%'};
      }
    }

    & .point {
      display: flex;
      align-items: baseline;
      margin-bottom: 8px;

      & p {
        margin-left: 16px;
        padding-right: 0%;
      }
    }

    @media (min-width: 768px) {
      justify-content: center;
      flex: ${props => (props.splitScreen ? '0 0 50%' : '0 0 100%')};
      max-width: ${props => (props.splitScreen ? '50%' : '100%')};
    }
  }


  & .hero__cta-container {
    margin-top: ${props => (props.onlyCTA ? '0px' : '40px')};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & button {
      width: 100%;

      &:first-child {
        margin-bottom: 16px; 
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      width: auto;
      & button {
        width: auto;
      }
      & button:first-child {
        margin: 0px;
        margin-right: 16px;
      }
    }
  }

  & .hero__image-container {
    margin: ${props => (props.splitScreen ? '0px auto' : '50px auto 20px')};
    width: 100%;

    @media (min-width: 768px) {
      flex: ${props => (props.splitScreen ? '0 0 50%' : '0 0 100%')};
      max-width: ${props => (props.splitScreen ? '50%' : '900px')};
      /* min-height on image isn't working on IE11 */
      /* Reason: Maybe image is loading afterwards */
      min-height: 446px;
    }
  }
`

function HeroBanner({
  title,
  subTitle,
  body,
  action,
  image,
  splitScreen,
  media,
  points
}) {
  const noMedia = !image && !media
  const onlyCTA = noMedia && !title && !subTitle && !body && !points
  const { togglePlayVideo, setURL } = React.useContext(VideoPlayerContext)

  const fluidProps = getFluidGatsbyImage(media, {
    maxWidth: 900,
    toFormat: 'webp'
  })

  return (
    <HeroBannerWrapper
      splitScreen={splitScreen}
      noMedia={noMedia}
      onlyCTA={onlyCTA}
    >
      <div className="hero__heading">
        <div className="hero__content">
          {title && (
            <Heading1 className="text--semi-bold mgn-b-10">{title}</Heading1>
          )}
          {subTitle && (
            <Heading4 className="text--brand mgn-b-20">{subTitle}</Heading4>
          )}
          {body && <BodyText>{body}</BodyText>}
          {points &&
            points.split(',').map(point => {
              return (
                <div className="point">
                  <Icon name="tick" />
                  <BodyText>{point}</BodyText>
                </div>
              )
            })}
          {action && !!action.length && (
            <div className="hero__cta-container">
              {action.map(item => {
                const Button = getButton(item.type)
                return (
                  <Button
                    key={item._uid}
                    onClick={() =>
                      navigateTo(item.link, {
                        fn: () => {
                          setURL('https://player.vimeo.com/video/219316897')
                          togglePlayVideo()
                        }
                      })
                    }
                  >
                    {item.label}
                  </Button>
                )
              })}
            </div>
          )}
        </div>
        {fluidProps && (
          <div className="hero__image-container">
            {fluidProps && <Img fluid={fluidProps} alt={'hero'} />}
          </div>
        )}
      </div>
    </HeroBannerWrapper>
  )
}

export default HeroBanner

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.string
}
HeroBanner.defaultProps = {
  title: 'Uprise'
}
