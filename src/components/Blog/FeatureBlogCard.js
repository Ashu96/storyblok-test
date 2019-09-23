import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import format from 'date-fns/format'
import { backgrounds, extended } from '../../constants/colors'
import { Col } from '../../styles/grid'
import { Heading1, BodyText } from '../../styles/text'
import { getDateWithoutTime } from '../../utils'

const FeaturedBlogContainer = Styled.div`
  /* margin: 100px 0px; */
  background-color: ${backgrounds.white}; 
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.8);

  & .col-md-6:first-child {
    margin-right: -15px;
  }
  & .col-md-6:last-child {
    margin-left: -15px;
  }

  & img {
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      margin-left: -15px;
    }
  }

  & .content {
    padding: 20px 25px;

    & h1 {
      margin-bottom: 24px;
    }

    & .body {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      
      margin-bottom: 32px;
    }

    @media (min-width: 768px) {
      padding: 60px 70px;
    }
  }
`

function FeaturedBlogCard({ title, media, body, date, category, slug }) {
  return (
    <FeaturedBlogContainer
      className="row"
      role="button"
      tabIndex="0"
      onClick={() => navigate(`/blog/${slug}`)}
    >
      <Col className="col-lg-6">
        <img loading="lazy" src={media} alt="featured" />
      </Col>
      <Col className="col-lg-6">
        <div className="content">
          <Heading1>{title}</Heading1>
          <BodyText className="body">{body}</BodyText>
          <div className="meta">
            <BodyText color={extended.charcoal.two}>
              {format(new Date(getDateWithoutTime(date)), 'MMMM dd, yyyy')} |{' '}
              {category}
            </BodyText>
          </div>
        </div>
      </Col>
    </FeaturedBlogContainer>
  )
}

export default FeaturedBlogCard

FeaturedBlogCard.propTypes = {
  title: PropTypes.string.isRequired
}

FeaturedBlogCard.defaultProps = {
  media: require('../../images/learn-what-hr.svg'),
  title: `Learn what HR Managers think is the best EAP Strategy`,
  body: `Uprise recently surveyed a group of 47 HR and WHS managers and asked about their views on mental health and EAP strategy. Those surveyed were from mostly whi…`,
  date: new Date(),
  category: 'Wellbeing'
}
