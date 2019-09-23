import React from 'react'
import Styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { SectionWrapper, Row, Col } from '../styles/grid'
import { Heading1, BodyText } from '../styles/text'
import { OutLineButton } from '../styles/buttons'
import { navigateTo } from '../utils'
import '../fonts/proxima-nova-web-fonts/fonts.css'
import '../components/layout.css'
import '../styles/bootstrap-grid-utils.css'

const Center = Styled.div`
  display: flex;
  justify-content: center;
`

const PictureContainer = Styled.picture`
  & .gatsby-image-wrapper {
    max-height: 650px;
  }
`

function Picture() {
  const data = useStaticQuery(graphql`
    {
      pageNotFound: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PictureContainer>
      <Img fluid={data.pageNotFound.childImageSharp.fluid}/>
    </PictureContainer>
  )
}

function PageNotFound() {

  return (
    <SectionWrapper
      containerProps={{
        style: {
          paddingTop: 100,
          paddingBottom: 100
        }
      }}
    >
      <Row>
        <Col>
          <Heading1 textCenter>Page not found</Heading1>
          <BodyText textCenter>
            Oops! The page you are looking for doesn't exist
          </BodyText>
        </Col>
        <Col>
          <Picture />
        </Col>
        <Col>
          <Center>
            <OutLineButton onClick={() => navigateTo('/')}>
              Go back home
            </OutLineButton>
          </Center>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default PageNotFound
