/*

  ./next.config.js

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used as the next.js conf file.

*/

/** @type {import('next').NextConfig} */

// For SCSS.
const path = require('path')

// Config.
const nextConfig = {

  // Strict mode is active.
  reactStrictMode: true,

  // Insert global variables.
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      $text-shadow: 0 0 10px #fff, 0 0 11px #fff, 0 0 15px #535353, 0 0 20px #535353, 0 0 20px #535353, 0 0 20px #535353, 0 0 20px #535353;
      $light-color: #3d3d3d;
      $dark-color: rgb(24, 24, 24);
      $hover-color: #767575;
    `,
  },

  // Redirect to home page.
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ]
  }

}

module.exports = nextConfig
