import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import ReactMarkDown from 'react-markdown'
import { Row, Col } from '../../styles/grid'
import { Heading2, BodyText, ContentWrapper } from '../../styles/text'
import { primary, backgrounds, extended } from '../../constants/colors'
import { VideoPlayerContext } from '../../utils'

const TrainingCardWrapper = Styled.div`

  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(219, 221, 227, 0.5);
  background-color: ${backgrounds.white};

  padding: 40px;
  margin-bottom: 50px;

  & .text {
    & h2 {
      margin-bottom: 20px;
    }
    & .content {
      & p {
        margin-bottom: 32px;
        font-size: 16px;
      }
    }
  }

  & .media {
    padding: 0px;
    margin-bottom: 32px;

    & .wrapper {
      background-color: ${extended.purple.four};
      & .description {
        padding: 8px;
        font-size: 14px;
      }
    }
    & img {
      width: 100%;
    }

    @media (min-width: 1024px) {
      padding: 0px 15px;
      & .wrapper {
        & .description {
          padding: 16px;
          font-size: 18px;
        }
      }
    }
  }
`

function TrainingCard({
  title,
  content,
  videoDescription,
  videoPreview,
  videoURL = 'https://player.vimeo.com/video/240756358'
}) {
  const { togglePlayVideo, setURL } = React.useContext(VideoPlayerContext)

  return (
    <TrainingCardWrapper>
      <Row>
        <Col className="col-lg-6 media">
          <div className="wrapper">
            <img
              src={videoPreview}
              alt={title}
              onClick={() => {
                console.log('Clicked!')
                setURL(videoURL)
                togglePlayVideo()
              }}
            />
            <div className="description">
              <BodyText color={primary.charcoal} bold>
                {videoDescription}
              </BodyText>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6 text">
          <Heading2>{title}</Heading2>
          <ContentWrapper className="content">
            <ReactMarkDown source={content} />
          </ContentWrapper>
        </Col>
      </Row>
    </TrainingCardWrapper>
  )
}

export default TrainingCard

TrainingCard.propTypes = {
  title: PropTypes.string.isRequired
}
TrainingCard.defaultTypes = {
  title: PropTypes.string.isRequired
}
