'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {
  app.register(require('@fastify/compress'), { global: true })
})
