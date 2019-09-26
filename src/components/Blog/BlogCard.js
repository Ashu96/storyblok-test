import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
// import Img from 'gatsby-image'
import format from 'date-fns/format'
import { navigate } from 'gatsby'
import { getDateWithoutTime } from '../../utils'
import { backgrounds, extended, primary } from '../../constants/colors'
import { BodyText, Note } from '../../styles/text'

const BlogCardContainer = Styled.div`
  background-color: ${backgrounds.white}; 
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(219, 221, 227, 0.8);
  /* width: 370px; */
  margin: auto;

  &:hover {
    box-shadow: 8px 12px 10px 0 rgba(219,221,227,0.8);
  }
  & .media {
    width: 100%;
    /* max-width: 370px; */
    height: 247px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  & .content {
    padding: 24px;

    & .title {
      margin-bottom: 5px;
      min-height: 60px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & .body {
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

    }

    & .meta {
      min-height: 48px;
    }

    @media (min-width: 768px) {
      /* padding: 60px 70px; */

    }
  }
`

function BlogCard({ title, media, body, date, category, slug }) {
  return (
    <BlogCardContainer
      role="button"
      tabIndex="0"
      onClick={() => navigate(`/blog/${slug}`)}
    >
      <div className="media">{media && <img src={media} alt="" />}</div>
      {/* <div className="media">{media && <Img fluid={media} alt="" />}</div> */}
      <div className="content">
        <BodyText className="title" bold color={primary.charcoal}>
          {title}
        </BodyText>
        <Note className="body" color={extended.charcoal.one}>
          {body}
        </Note>
        <div className="meta">
          <Note color={extended.charcoal.three}>
            {format(new Date(getDateWithoutTime(date)), 'MMMM dd, yyyy')} |{' '}
            {category}
          </Note>
        </div>
      </div>
    </BlogCardContainer>
  )
}

export default BlogCard

BlogCard.propTypes = {
  title: PropTypes.string.isRequired
}

BlogCard.defaultProps = {
  date: new Date()
}
