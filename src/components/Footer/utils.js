export const MENU = [
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
    label: 'Sign in',
    key: 'sign-in',
    link: 'https://app.uprise.co'
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

export const LEGAL_INFO= [
  {
    label: 'privacy',
    key: 'privacy',
    link: '/privacy'
  },
  {
    label: 'terms',
    key: 'terms',
    link: '/terms-and-conditions'
  },
  {
    label: 'cookie policy',
    key: 'cookie-policy',
    link: '/cookie-policy'
  },
  {
    label: 'data security',
    key: 'data-security',
    link: '/data-security/'
  }
]

export const SOCIAL_LINKS = [
  {
    label: require('../../images/facebook@3x.png'),
    key: 'facebook',
    link: 'https://www.facebook.com/getuprise/'
  },
  {
    label: require('../../images/linkedin@3x.png'),
    key: 'linkedIn',
    link: 'https://www.linkedin.com/company/getuprise/'
  },
  {
    label: require('../../images/twitter@3x.png'),
    key: 'twitter',
    link: 'https://twitter.com/upriseatwork?lang=en'
  }
]

export function toCapitalCase(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}