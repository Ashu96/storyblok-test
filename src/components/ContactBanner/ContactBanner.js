import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
// import Img from 'gatsby-image'
import { Row, Col } from '../../styles/grid'
import { Heading2, BodyText } from '../../styles/text'
import { primary } from '../../constants/colors'

const ContactBannerWrapper = Styled.div`
padding: 35px 45px;

& .media {
  margin-bottom: 32px;
  & img {
    width: 100%;
  }
}

& h2 {
  margin-bottom: 54px;
}

& .content {
  /* padding-left: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h2 {
    margin-top: 32px;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding-left: 100px;

    & h2 {
      text-align: inherit;
      margin-top: 0px;
    }
  }
}

& .list {
  list-style: none;
  padding: 0px;

  & li {
    margin-bottom: 32px;
    display: flex;
    max-width: 320px;

    & img {
      width: 32px;
    }
    & p {
      margin-left: 24px;
    }
  }
}
`

function ContactBanner({ blok }) {
  const {
    title,
    media,
    phone,
    email,
    chat,
    phoneIcon,
    emailIcon,
    chatIcon
  } = blok
  return (
    <ContactBannerWrapper>
      <Row>
        <Col className="col-md-6 media">
          <img loading='lazy' src={media} alt="" />
          {/* <Img fluid={media} alt="" /> */}
        </Col>
        <Col className="col-md-6 content">
          <Heading2>{title}</Heading2>
          <ul className="list">
            <li>
              {/* <Img fixed={phoneIcon} alt="" /> */}
              <img loading='lazy' src={phoneIcon} alt="" />
              <BodyText color={primary.charcoal} bold>
                {phone}
              </BodyText>
            </li>
            <li>
              <img loading='lazy' src={emailIcon} alt="" />
              {/* <Img fixed={emailIcon} alt="" /> */}
              <BodyText color={primary.charcoal} bold>
                {email}
              </BodyText>
            </li>
            <li>
              {/* <Img fixed={chatIcon} alt="" /> */}
              <img loading='lazy' src={chatIcon} alt="" />              
              <BodyText color={primary.charcoal} bold>
                {chat}
              </BodyText>
            </li>
          </ul>
        </Col>
      </Row>
    </ContactBannerWrapper>
  )
}

export default ContactBanner

ContactBanner.propTypes = {
  title: PropTypes.string,
  media: PropTypes.object.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  chat: PropTypes.string
}

ContactBanner.defaultProps = {
  title: 'Get in touch with Uprise',
  phone: '1300 209 371',
  email: 'team@uprise.co',
  chat: 'please use the chat bubble in the bottom right of screen',
  media: {
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAE6klEQVQ4y22U60+TdxTHq8m27MX+gb3aK7Ms2RaTJWbxhctEEW/Mu0x0RkGRi0OBuVVRh0IEjaXKRRG5iQrScm8pFKiUSyn3Si+sUHqhLW1pn95toc/z+6449dW+ycn55iTnk/PinMNiRSWzEZbWtbZh3SsmZZ8sUOEdBj/yjT6m3eClZ4w+LBq8WFj0kDHNClM/YsIF8Vx4E+u9JCpm4wfPktvx0c+6mL1qL/rmg3AYfCRgfQvKScNm9BCrwQPLvAOWWQcMo0ZiGDdjSm5CoWD67Zfrvd1T76EAeZen7PRVhRs2h1bm8Y43UMYgFkfnbOam7gn7kh+mBQqmwmyhn8vptsysYII/ZFHxRxyLwzpIxIrIlnWGaIL8Bx1dJqmTdsY+64VKWV3kNz25Gr...',
    aspectRatio: 1.1702127659574468,
    src:
      '/static/0b08cc6abe1ac7984108e724aea41aa6/0533f/8b4ad0508daddc454bd4381897b64f8a.png',
    srcSet:
      '/static/0b08cc6abe1ac7984108e724aea41aa6/2e992/8b4ad0508daddc454bd4381897b64f8a.png 290w,\n/static/0b08cc6abe1ac7984108e724aea41aa6/88297/8b4ad0508daddc454bd4381897b64f8a.png 580w,\n/static/0b08cc6abe1ac7984108e724aea41aa6/0533f/8b4ad0508daddc454bd4381897b64f8a.png 1160w,\n/static/0b08cc6abe1ac7984108e724aea41aa6/f7198/8b4ad0508daddc454bd4381897b64f8a.png 1210w',
    sizes: '(max-width: 1160px) 100vw, 1160px'
  },

  action: {
    primary: {
      label: 'Sign up for Upskill',
      link: '/login'
    }
  }
}
