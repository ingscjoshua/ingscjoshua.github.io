'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    /**
     * Variables APP
     */
    VUE_APP_SITE_NAME:'Josué Hernández Ramírez'
})
