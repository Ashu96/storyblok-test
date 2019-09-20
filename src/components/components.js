import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
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
import BlogPost from './Blog'
import FeaturePricingCard  from './FeaturePricingCard'
import FAQs  from './FAQs'
import FeatureCard from './FeatureCard'
import StaffMemberCard from './StaffMemberCard'
import Subscribe from './Subscribe'
import ContactForm from './ContactForm'
import Static from './Static'
import Plugin, { PaperForm } from './Plugin'
import Path from './Path'
import CollateralCard from './CollateralCard'
import Carousel from './Carousel'
import CalendarCard from './CalendarCard'
import BlogHome from './Blog/BlogHome'
import {RequestAccessCode, EapSupport, LegalSupport} from './Forms'
import Button from './Button'
import PricingTable from './PricingTable'
import {SECTION_TYPES} from '../constants'

const ComponentList = {
  page: Page,
  grid: Grid,
  Grid: Grid,
  teaser: Teaser,
  feature: Feature,
  'Hero Banner': HeroBanner,
  'media': Media,
  [SECTION_TYPES.MULTIPLE_MEDIA_WITH_CAPTION]: MultipleMediaWithCaption,
  [SECTION_TYPES.SINGLE_MEDIA_WITH_CAPTION_AND_PARAGRAPH]: SingleMediaWithCaptionAndParagraph,
  [SECTION_TYPES.HEADING_WITH_SINGLE_MEDIA_AND_BUTTON]: HeadingWithSingleMediaAndButton,
  [SECTION_TYPES.SUPPORT_CARD]: SupportCard,
  [SECTION_TYPES.CONTACT_BANNER]: ContactBanner,
  [SECTION_TYPES.BLOG_POST]: BlogPost,
  report: UpriseReport,
  heading: Heading,
  seo: Seo,
  header: Header,
  Subscribe: Subscribe,
  path: Path,
  Carousel: Carousel,
  PaperForm: PaperForm,
  [SECTION_TYPES.CONTACT_FORM]: ContactForm,
  [SECTION_TYPES.FEATURE_PRICING_CARD]: FeaturePricingCard,
  [SECTION_TYPES.WITH_ACCORDION]: FAQs,
  [SECTION_TYPES.FEATURE_CARD]: FeatureCard,
  [SECTION_TYPES.STAFF_MEMBER]: StaffMemberCard,
  [SECTION_TYPES.STATIC]: Static,
  [SECTION_TYPES.PLUGIN]: Plugin,
  [SECTION_TYPES.COLLATERAL_CARD]: CollateralCard,
  [SECTION_TYPES.CALENDAR_CARD]: CalendarCard,
  [SECTION_TYPES.BLOG_HOME]: BlogHome,
  [SECTION_TYPES.REQUEST_ACCESS_CODE]: RequestAccessCode,
  [SECTION_TYPES.EAP_SUPPORT]: EapSupport,
  [SECTION_TYPES.LEGAL_SUPPORT]: LegalSupport,
  [SECTION_TYPES.BUTTON]: Button,
  [SECTION_TYPES.PRICING_TABLE]: PricingTable
}

const Components = (type) => {
  console.log(`type: ${type}`)
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components