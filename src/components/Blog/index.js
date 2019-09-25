import React from 'react'
import Styled from 'styled-components'
// import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'
import RelatedPosts from './RelatedPosts'
import { getDateWithoutTime } from '../../utils'
import { Heading1, BodyText, ContentWrapper } from '../../styles/text'
import { SectionWrapper, Row, Col } from '../../styles/grid'
import { backgrounds } from '../../constants/colors'

const BlogContentContainer = Styled.div`
  background-color: ${backgrounds.white};
  padding: 80px 0px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(219, 221, 227, 0.8);

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
      padding: 0px 8%;
    }

    & .media {
      width: 100%;
      max-width: 700px;
    }
  }
`

function Blog({ blok }) {
  const { title, date, content, media, category = 'Category 1' } = blok
  const paddingVertical = 100
  return (
    <React.Fragment>
      <SectionWrapper
        containerFluidProps={{
          style: {
            backgroundColor: backgrounds.fadedPurple
          }
        }}
        containerProps={{
          style: {
            paddingTop: paddingVertical,
            paddingBottom: paddingVertical
          }
        }}
      >
        <BlogContentContainer>
          <Row className="justify-content-center">
            <Col className="col-lg-9 content">
              <Heading1 textCenter>{title}</Heading1>
              <BodyText textCenter className="mgn-t-20">
                {format(new Date(getDateWithoutTime(date)), 'MMMM dd, yyyy')} |{' '}
                {category}
              </BodyText>

              {/* <Img
              fluid={image.childImageSharp.fluid}
              className="mgn-t-100 mgn-b-40"
              alt="nesting"
            /> */}
              <img
                loading="lazy"
                src={media}
                className="mgn-t-100 mgn-b-40 media"
                alt="nesting"
              />
              <ContentWrapper>
                <ReactMarkdown source={content.original} />
              </ContentWrapper>
            </Col>
          </Row>
        </BlogContentContainer>
      </SectionWrapper>
      <RelatedPosts category={category && category.length && category[0]} />
    </React.Fragment>
  )
}

export default Blog
