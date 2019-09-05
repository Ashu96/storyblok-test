import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import NavItem from './nav_item'
import ComponentNotFound from './component_not_found'
import HeroBanner from './HeroBanner'
import MultipleMediaWithCaption from './MultipleMediaWithCaption'
import SingleMediaWithCaptionAndParagraph from './SingleMediaWithCaptionAndParagraph'
import HeadingWithSingleMediaAndButton from './HeadingWithSingleMediaAndButton'
import Media from './Media'
import UpriseReport from './UpriseReport'
import Heading from './Heading'
import Seo from './Seo'
import Header from './Header'
import SupportCard from './SupportCard'
import ContactBanner from './ContactBanner'
import {SECTION_TYPES} from '../constants'

const ComponentList = {
  page: Page,
  grid: Grid,
  Grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem,
  'Hero Banner': HeroBanner,
  'media': Media,
  [SECTION_TYPES.MULTIPLE_MEDIA_WITH_CAPTION]: MultipleMediaWithCaption,
  [SECTION_TYPES.SINGLE_MEDIA_WITH_CAPTION_AND_PARAGRAPH]: SingleMediaWithCaptionAndParagraph,
  [SECTION_TYPES.HEADING_WITH_SINGLE_MEDIA_AND_BUTTON]: HeadingWithSingleMediaAndButton,
  [SECTION_TYPES.SUPPORT_CARD]: SupportCard,
  [SECTION_TYPES.CONTACT_BANNER]: ContactBanner,
  report: UpriseReport,
  heading: Heading,
  seo: Seo,
  header: Header,
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components