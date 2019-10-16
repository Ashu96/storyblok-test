[![Netlify Status](https://api.netlify.com/api/v1/badges/89111b0b-e02b-47e1-835e-44f51c2f52a9/deploy-status)](https://app.netlify.com/sites/uprise-storyblok/deploys)
# Introduction

This repo is a marketing site for `Uprise.co` built using Gatsby 

## Requirements

We use storyblok as CMS and content editor

## Getting started

1. Get the source code via git clone and install dependencies.
~~~
yarn install
~~~

2. If you haven't already. Exchange the `accessToken` in `gatsby-config.js` with the preview token of a Storyblok space which you can find on the space settings page.

3. Start the project with `gatsby develop` and set the preview domain in Storyblok to `http://localhost:8000/editor?path=`

## Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn start`
Run in the project locally for development.

### `yarn build`
Run a production build into ./public. The result is ready to be put on any static hosting you prefer.
