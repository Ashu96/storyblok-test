import React from 'react'
import {
  BUTTON_TYPES,
  NAV_ITEM_TYPES,
  // SECTION_TYPES,
  // CARD_TYPES
} from '../constants'
import {
  PrimaryButton,
  TertiaryButton,
  LinkButton,
  OutLineButton
} from '../styles/buttons'
// import HeroSection from '../components/HeroSection'
// import ContentWithImageList from '../components/ContentWithImageList'
// import TourSection from '../components/tourSection'
// import HeadingWithSingleMediaAndButton from '../components/HeadingWithSingleMediaAndButton'
// import SingleMediaWithParagraphAndLink from '../components/SingleMediaWithParagraphAndLink'
// import Reports from '../components/Reports'
// import SectionWithCards from '../components/SectionWithCards'
import {
  NavLogo,
  NavLink,
  NavButton,
  NavDropDown
} from '../components/Header/NavItems'
// import FeaturedCard from '../components/FeatureCard'
// import SupportCard from '../components/SupportCard'
// import ContactBanner from '../components/ContactBanner'

// export function getComponent(type) {
// 	switch (type) {
// 	case SECTION_TYPES.HERO_SECTION:
// 		return HeroSection
// 	case SECTION_TYPES.MULTIPLE_MEDIA_WITH_CAPTION:
// 		return ContentWithImageList
// 	case SECTION_TYPES.SINGLE_MEDIA_WITH_CAPTION_AND_PARAGRAPH:
// 		return TourSection
// 	case SECTION_TYPES.WITH_CARDS:
// 		return SectionWithCards
// 	case SECTION_TYPES.HEADING_WITH_SINGLE_MEDIA_AND_BUTTON:
// 		return HeadingWithSingleMediaAndButton
// 	case SECTION_TYPES.SINGLE_MEDIA_WITH_PARAGRAPH_AND_LINK:
// 		return SingleMediaWithParagraphAndLink
// 	case SECTION_TYPES.REPORTS:
// 		return Reports
// 	case SECTION_TYPES.CONTACT_BANNER:
// 		return ContactBanner
// 	default:
// 		return () => <h1>No component found</h1>
// 	}
// }

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

// function getStrapiURL() {
// 	console.log(`Env: ${process.env.NODE_ENV}`)
// 	return process.env.NODE_ENV === 'development'
// 		? 'http://localhost:1337'
// 		: 'http://testing-marketing.uprise.co'
// }

// export function getPublicURL(url) {
// 	return `${getStrapiURL()}${url}`
// }

// export function extractQueryData({ data, id }) {
// 	if (!data) {
// 		return null
// 	}

// 	const filteredDataArray = data.edges.filter(
// 		edge => edge.node.strapiId === id.trim()
// 	)

// 	const { node } =
// 		filteredDataArray && filteredDataArray.length && filteredDataArray[0]

// 	if (!node) {
// 		return null
// 	}

// 	return node
// }

// export function getSlugFromTitle(title) {
// 	return title
// 		.toLowerCase()
// 		.replace(/[^\w ]+/g, '')
// 		.replace(/ +/g, '-')
// }

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

// export function getCard(type) {
// 	switch (type) {
// 	case CARD_TYPES.FEATURE_CARD:
// 		return FeaturedCard
// 	case CARD_TYPES.SUPPORT_CARD:
// 		return SupportCard
// 	default:
// 		return FeaturedCard
// 	}
// }

export function isExternal(url) {
  console.log(`URL: ${url}`)
  return url.includes('http')
}
