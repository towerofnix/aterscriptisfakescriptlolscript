const make = require('nearley-make')
const fsp = require('fs-promise')
const delay = x => new Promise(
  r => setTimeout(() => r(x), Math.random() * 1000))

module.exports = function(code) {
  console.log('Getting grammar..')

  return Promise.all([
    fsp.readFile('test.ne', 'utf-8'),
  ]).then(([ grammar ]) => {
    console.log('Making grammar..')
    return make(grammar, {})
  }).then(delay)
    .then(parser => {
    console.log('Feeding code..')
    const trees = parser.feed(code).results
  }).then(delay)
    .then(trees => {
    console.log('Depending on code..')
    console.log(code)
    return 'lol'
  }).then(delay)
    .then(magicMsg => {
    console.log('Generating program..')
    return __RESULT__.toString()
      .match(/\{\n([\s\S]*)\}/)[1]
  })
}

function __RESULT__() {
const promptp = require('prompt-promise')

promptp('INPUT>> ').then(INPUT => {
  try {
    const random = function(x, y) {
      // probably wrong but who cares
      return Math.min(x, y) + Math.random() * Math.abs(y - x)
    }

    if (INPUT === "Jonathan50") {
      console.log("?".repeat(random(1, 3)))
      blargh
      this
      is
      an
      error
      that
      never
      gets
      caught
      so
      cool
      !!!!!1111111
      !!!!!!!!!!!!!!11
    } else if (INPUT === "nanalan") {
      console.log("oh my goodness just make it nearley-made already 😞")
    }

    console.error('bad input')
  } catch(e){}
})
}
