import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'

import Components from '../components/components.js'
import { Vimeo } from '../components/Plugin'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { VideoPlayerContext } from '../utils'
import { backgrounds } from '../constants/colors'
import '../components/layout.css'
import '../fonts/proxima-nova-web-fonts/fonts.css'
import '../styles/bootstrap-grid-utils.css'
class StoryBlokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryBlokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    return {
      story
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      playVideo: false,
      url: 'https://player.vimeo.com/video/219316897',
      ...StoryBlokEntry.prepareStory(props)
    }
  }

  render() {
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
      <PageTransition
      // defaultStyle={{
      //   transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      //   left: '100%',
      //   position: 'absolute',
      //   width: '100%'
      // }}
      // transitionStyles={{
      //   entering: { left: '0%' },
      //   entered: { left: '0%' },
      //   exiting: { left: '100%' }
      // }}
      // transitionTime={500}
      >
        <VideoPlayerContext.Provider
          value={{
            playVideo: this.state.playVideo,
            togglePlayVideo: () =>
              this.setState(prevState => ({ playVideo: !prevState.playVideo })),
            url: this.state.url,
            setURL: (url) => this.setState({ url })
          }}
        >
          <Header />
          {React.createElement(Components(content.component), {
            key: content._uid,
            blok: content,
            ...content
          })}
          <Footer backgroundColor={footerBackgroundColor} />
          <Vimeo />
        </VideoPlayerContext.Provider>
      </PageTransition>
    )
  }
}

export default StoryBlokEntry
