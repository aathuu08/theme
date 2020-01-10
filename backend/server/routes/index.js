'use strict'

const auth = require('./auth')
const cart = require('./cart')
const inventory = require('./inventory')
const review = require('./theme')

module.exports = Object.assign({}, auth, cart, inventory, review)
