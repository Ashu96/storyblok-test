import React from 'react'
import SbEditable from 'storyblok-react'
import Components from '../components/components.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Vimeo } from '../components/Plugin'
import { VideoPlayerContext } from '../utils'
import { backgrounds } from '../constants/colors'
import config from '../../gatsby-config'
import '../fonts/proxima-nova-web-fonts/fonts.css'
import '../components/layout.css'
import '../styles/bootstrap-grid-utils.css'

const loadStoryblokBridge = function(cb) {
  let sbConfigs = config.plugins.filter(item => {
    return item.resolve === 'gatsby-source-storyblok'
  })
  let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = function(val) {
  var result = ''
  var tmp = []

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function(item) {
      tmp = item.split('=')
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { playVideo: false, story: null, globalNavi: { content: {} } }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory(payload) {
    window.storyblok.get(
      {
        slug: getParam('path'),
        version: 'draft'
      },
      data => {
        this.setState({ story: data.story })
        this.loadGlovalNavi(data.story.lang)
      }
    )
  }

  loadGlovalNavi(lang) {
    const language = lang === 'default' ? '' : lang + '/'
    window.storyblok.get(
      {
        slug: `${language}global-navi`,
        version: 'draft'
      },
      data => {
        this.setState({ globalNavi: data.story })
      }
    )
  }

  initStoryblokEvents() {
    this.loadStory({ storyId: getParam('path') })

    let sb = window.storyblok

    sb.on(['change', 'published'], payload => {
      this.loadStory(payload)
    })

    sb.on('input', payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        )
        this.setState({ story: payload.story })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return <div></div>
    }

    let content = {
      ...this.state.story.content,
      // Remove `header` from component list
      body: this.state.story.content.body.filter(
        item => item.component !== 'header'
      )
    }

    const lastSection =
      content && content.body && content.body[content.body.length - 1]
    const footerBackgroundColor =
      lastSection && lastSection.backgroundColor === '#ffffff'
        ? backgrounds.fadedPurple
        : backgrounds.white

    return (
      <SbEditable content={content}>
        <VideoPlayerContext.Provider
          value={{
            playVideo: this.state.playVideo,
            togglePlayVideo: () =>
              this.setState(prevState => ({ playVideo: !prevState.playVideo }))
          }}
        >
          <Header />
          {React.createElement(Components(content.component), {
            key: content._uid,
            blok: content
          })}
          <Footer backgroundColor={footerBackgroundColor} />
          <Vimeo />
        </VideoPlayerContext.Provider>
      </SbEditable>
    )
  }
}

export default StoryblokEntry
