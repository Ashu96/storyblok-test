import { Link } from 'gatsby'
import React from 'react'
import Styled from 'styled-components'
import { primary, backgrounds, extended } from '../constants/colors'

import { Note } from '../styles/text'

const FooterContainer = Styled.footer`
  background-color: ${backgrounds.fadedPurple};
  padding: 80px 0px;

  & .footer__right {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & .copy-rights {
      font-weight: normal;
      text-align: center;
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
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;

    @media (min-width: 768px) {
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

const footerMenu = [
	{
		label: 'contact us',
		key: 'contact',
		link: '/contact-us'
	},
	{
		label: 'blog',
		key: 'blog',
		link: '/blog'
	},
	{
		label: 'Legal information',
		key: 'legal',
		link: '/legal-information'
	},
	{
		label: 'log in',
		key: 'login',
		link: '/login'
	},
	{
		label: 'book a demo',
		key: 'demo',
		link: '/book-demo'
	},
	{
		label: 'careers',
		key: 'careers',
		link: '/careers'
	}
]

const socialLinks = [
	{
		label: require('../images/facebook@3x.png'),
		key: 'facebook',
		link: 'https://www.facebook.com/getuprise/'
	},
	{
		label: require('../images/linkedin@3x.png'),
		key: 'linkedIn',
		link: 'https://in.linkedin.com/company/uprise'
	},
	{
		label: require('../images/twitter@3x.png'),
		key: 'twitter',
		link: 'https://twitter.com/upriseatwork?lang=en'
	}
]

function Footer() {
	return (
		<FooterContainer className="container-fluid">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-6">
						<div className="row">
							<div className="col-6">
								<ul className="footer__links">
									{footerMenu.map(item => (
										<li key={item.key}>
											<Note color={primary.purple}>
												<Link to={item.link}>{item.label.toUpperCase()}</Link>
											</Note>
										</li>
									))}
								</ul>
							</div>
							<div className="col-6 footer__company-info">
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
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 footer__right">
						<div className="footer__social-links">
							{socialLinks.map(link => (
								<a
									key={link.key}
									href={link.link}
									target="_blank"
									aria-label={link.key}
									rel="noopener noreferrer"
								>
									<img loading='lazy' src={link.label} alt={link.key} />
								</a>
							))}
						</div>
						<Note className="copy-rights">
							© 2017 Uprise Services. All rights reserved.
						</Note>
					</div>
				</div>
			</div>
		</FooterContainer>
	)
}

export default Footer
