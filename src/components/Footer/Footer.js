import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Anchor } from '../Generic'
import { SectionWrapper, Row, Col } from '../../styles/grid'
import { Note } from '../../styles/text'
import { primary, backgrounds, extended } from '../../constants/colors'
import { MENU, SOCIAL_LINKS,LEGAL_INFO } from './utils'

const FooterWrapper = Styled.div`
  & .footer__right {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & .copy-rights {
      font-weight: normal;
      text-align: center;
    }

    @media (min-width: 1024px) {
      margin: 0px;
    }
  }

  & .footer__links {
    margin: 0px;
    list-style: none;
    padding: 0px;
    color: ${primary.purple};

    & li {
      margin-bottom: 8px;
    }
  }

  & .footer__company-info {
    & ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
    }
    & .footer__contact {
      margin-top: 32px;
    }

    & li {
      margin-bottom: 8px;
    }
  }

  & .footer__social-links {
    margin-top: 32px;

    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      margin-top: 0px;

      justify-content: center;
      & img {
        margin-left: 40px;
      }
    }

    & img {
      width: 40px;
      height: 40px;
      /* margin-left: 40px; */
    }
  }

  & button {
    margin-right: 16px;

  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`

function Footer() {
  const paddingVertical = 100
  return (
    <SectionWrapper
      containerFluidProps={{
        className: 'container-fluid',
        style: {
          backgroundColor: backgrounds.fadedPurple
        }
      }}
      containerProps={{
        className: 'container',
        style: {
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical
        }
      }}
    >
      <FooterWrapper>
        <Row>
          <Col className="col-lg-6">
            <Row>
              <Col className="col-md-6">
                <ul className="footer__links">
                  {MENU.map(item => (
                    <li key={item.key}>
                      <Note color={primary.purple}>
                        <Anchor to={item.link}>
                          {item.label.toUpperCase()}
                        </Anchor>
                      </Note>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col className="col-md-6">
                <ul className="footer__links">
                  {LEGAL_INFO.map(item => (
                    <li key={item.key}>
                      <Note color={primary.purple}>
                        <Anchor to={item.link}>
                          {item.label.toUpperCase()}
                        </Anchor>
                      </Note>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="col-lg-6 footer__right">
            <Row>
              <Col className="col-md-6 footer__company-info">
                <ul className="footer__address">
                  <li>
                    <Note color={extended.charcoal.three}>Uprise</Note>
                  </li>
                  <li>
                    <Note style={{ fontWeight: 'normal' }}>
                      11 York Street, Sydney,
                    </Note>
                  </li>
                  <li>
                    <Note style={{ fontWeight: 'normal' }}>
                      NSW, 2000, Australia
                    </Note>
                  </li>
                </ul>
                <ul className="footer__contact">
                  <li>
                    <Note style={{ fontWeight: 'normal' }}>1300 209 371</Note>
                  </li>
                  <li>
                    <Note style={{ fontWeight: 'normal' }}>team@uprise.co</Note>
                  </li>
                </ul>
              </Col>
              <Col className="col-md-6">
                <div className="footer__social-links">
                  {SOCIAL_LINKS.map(link => (
                    <Anchor
                      to={link.link}
                      key={link.key}
                      target="_blank"
                      aria-label={link.key}
                      rel="noopener noreferrer"
                    >
                      <img loading="lazy" src={link.label} alt={link.key} />
                    </Anchor>
                  ))}
                </div>
                <Note className="copy-rights">
                  © 2017 Uprise Services. All rights reserved.
                </Note>
              </Col>
            </Row>
          </Col>
        </Row>
      </FooterWrapper>
    </SectionWrapper>
  )
}

export default Footer

Footer.propTypes = {
  title: PropTypes.string.isRequired
}
Footer.defaultTypes = {
  title: PropTypes.string.isRequired
}
