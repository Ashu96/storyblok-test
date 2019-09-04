import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import NavItem from './nav_item'
import ComponentNotFound from './component_not_found'
import HeroBanner from './HeroBanner'
import MultipleMediaWithCaption from './MultipleMediaWithCaption'
import SingleMediaWithCaptionAndParagraph from './SingleMediaWithCaptionAndParagraph'
import {SECTION_TYPES} from '../constants'

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem,
  'Hero Banner': HeroBanner,
  [SECTION_TYPES.MULTIPLE_MEDIA_WITH_CAPTION]: MultipleMediaWithCaption,
  [SECTION_TYPES.SINGLE_MEDIA_WITH_CAPTION_AND_PARAGRAPH]: SingleMediaWithCaptionAndParagraph
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components