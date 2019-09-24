import React from 'react'
import Components from '../components/components.js'
import { Vimeo } from '../components/Plugin'
import Footer from '../components/Footer'
import { VideoPlayerContext } from '../utils'
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

    this.state = { playVideo: false, ...StoryBlokEntry.prepareStory(props) }
  }

  render() {
    console.log({ state: this.state })
    let content = this.state.story.content
    console.count('Render template')
    console.log({ content })
    return (
      <VideoPlayerContext.Provider
        value={{
          playVideo: this.state.playVideo,
          togglePlayVideo: () =>
            this.setState(prevState => ({ playVideo: !prevState.playVideo }))
        }}
      >
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
          ...content
        })}
        <Footer />
        <Vimeo />
      </VideoPlayerContext.Provider>
    )
  }
}

export default StoryBlokEntry
