import React from 'react'
import HeroBanner from './HeroBanner'

function HeroBannerWrapper({ blok }) {
  console.log({ blok })

  return (
    <HeroBanner
      title={blok.title}
      subTitle={blok.subtitle}
      bgPrimary={blok.bgPrimary}
      splitScreen={blok.splitScreen}
      action={blok.action}
      media={blok.image}
      body={blok.body}
      points={blok.points}
    />
  )
}

export default HeroBannerWrapper
