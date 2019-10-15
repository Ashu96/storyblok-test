import React from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { BUTTON_TYPES, NAV_ITEM_TYPES } from '../constants'
import {
  PrimaryButton,
  TertiaryButton,
  LinkButton,
  OutLineButton
} from '../styles/buttons'
import {
  NavLogo,
  NavLink,
  NavButton,
  NavDropDown
} from '../components/Header/NavItems'

export function useContainerWidth(selector = 'body', padding = 30) {
  const [containerWidth, setContainerWidth] = React.useState(0)

  React.useEffect(() => {
    const el = document.querySelector(selector)
    if (el) {
      const { width } = el.getBoundingClientRect()
      setContainerWidth(width - padding)
    }
  }, [selector, padding])
  return containerWidth
}

export function getDimensions(url = '') {
  const tokens = url.split('/')
  const resolution = tokens.find(token => token.includes('x'))
  if (resolution) {
    return resolution.split('x')
  }
  return [150, 150]
}

export function getButton(type) {
  switch (type) {
    case BUTTON_TYPES.LINK:
      return LinkButton
    case BUTTON_TYPES.PRIMARY:
      return PrimaryButton
    case BUTTON_TYPES.TERTIARY:
      return TertiaryButton
    case BUTTON_TYPES.OUTLINE:
      return OutLineButton
    default:
      return props => <PrimaryButton {...props} secondary />
  }
}

export function getSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function getNavItem(item) {
  switch (item.type) {
    case NAV_ITEM_TYPES.LOGO:
      return NavLogo
    case NAV_ITEM_TYPES.BUTTON:
      return NavButton
    case NAV_ITEM_TYPES.DROP_DOWN:
      return NavDropDown
    default:
      return NavLink
  }
}

export function isExternal(url) {
  return url.includes('http')
}

export function navigateTo(link = '/', { fn } = {}) {
  if (isExternal(link)) {
    window.open(link, '_blank')
  } else if (link.includes('video') && fn) {
    fn()
  } else {
    navigate(link)
  }
}

export function useMobile() {
  const [isMobile, toggleIsMobile] = React.useState(false)

  React.useEffect(() => {
    toggleIsMobile(window.innerWidth < 1024)
  }, [])

  return isMobile
}

export function getDateWithoutTime(date) {
  let dateWithoutTime = date
  if (typeof date === 'string' && date.split(' ').length === 2) {
    dateWithoutTime = date.split(' ')[0]
  }
  return dateWithoutTime
}

export const VideoPlayerContext = React.createContext({ playVideo: false })

export function useHeader() {
  const data = useStaticQuery(graphql`
    {
      allStoryBlokEntry: allStoryblokEntry(
        filter: { full_slug: { eq: "home" } }
      ) {
        edges {
          node {
            id
            name
            full_slug
            published_at(fromNow: true)
            slug
            field_component
            content
          }
        }
      }
    }
  `)
  // Get header
  const { allStoryBlokEntry } = data
  const { node } = allStoryBlokEntry.edges.find(
    ({ node }) => node.field_component === 'page'
  )
  const content = JSON.parse(node.content)
  const header = content.body.find(item => item.component === 'header')
  return header
}

export function logger(message) {
  var css = `color: #27ae60; font-size: 18px;`

  console.log('%c %s', css, message)
}

export function useScript(url, options = {}) {
  const { shouldLoad, onLoad, onError, async, defer } = options
  const [isScriptLoaded, setIsScriptLoaded] = React.useState(false)

  React.useEffect(() => {
    if (!isScriptLoaded && shouldLoad) {
      setIsScriptLoaded(true)

      const script = document.createElement('script')
      document.body.appendChild(script)
      script.onload = () => {
        logger('Script loaded successfully!')
        onLoad && onLoad()
      }
      script.onerror = () => {
        logger('Error occurred while loading script')
        onError && onError()
      }
      if (async) {
        script.async = true
      }
      if (defer) {
        script.defer = true
      }
      script.src = url
    }
  }, [isScriptLoaded, url, shouldLoad, onLoad, onError, async, defer])
}
