import React from 'react'
import Styled from 'styled-components'
// import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'
// import RelatedPosts from '../components/Blog/RelatedPosts'
import { Heading1, BodyText } from '../../styles/text'
import { Row, Col } from '../../styles/grid'
import { backgrounds, primary, extended } from '../../constants/colors'

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

const ContentWrapper = Styled.div`
  & img {
    width: 100%;
  }

  & li {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
  }

  & p {
    font-family: ${props =>
      props.bold ? 'Proxima Nova Semibold' : 'Proxima Nova'};
    font-size: 18px;
    font-weight: ${props => (props.bold ? 600 : 'normal')};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${props => (props.color ? props.color : extended.charcoal.one)};
    
    margin-bottom: 50px;
  }

  & h1, h2, h3, h4 {
    margin-bottom: 20px;
  }

  & h2 {
    font-family: 'Proxima Nova Semibold';
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};
  }

  & h3 {
    font-family: 'Proxima Nova Semibold';
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: ${props => (props.textCenter ? 'center' : 'inherit')};
    color: ${primary.charcoal};Z
  }

`

function Blog({ blok }) {
  const { title, date, content, media, category = 'Category 1' } = blok
  console.log({ content, date })
  return (
    <BlogContentContainer>
      <Row className="justify-content-center">
        <Col className="col-lg-9 content">
          <Heading1 textCenter>{title}</Heading1>
          <BodyText textCenter className="mgn-t-20">
            {format(new Date(date), 'MMMM dd, yyyy')} | {category}
          </BodyText>

          {/* <Img
            fluid={image.childImageSharp.fluid}
            className="mgn-t-100 mgn-b-40"
            alt="nesting"
          /> */}
          <img src={media} className="mgn-t-100 mgn-b-40 media" alt="nesting" />
          <ContentWrapper>
            <ReactMarkdown source={content.original} />
          </ContentWrapper>
        </Col>
      </Row>
    </BlogContentContainer>
  )
}

export default Blog
