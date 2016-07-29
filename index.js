const compile = require('./compile')
const fsp = require('fs-promise')
const promptp = require('prompt-promise')

const args = process.argv.slice(2)

if (args.length === 1) {
  fsp.readFile(args[0], 'utf-8')
    .then(code => compile(code))
    .then(res => {
      console.log('Evaluating program..')
      eval(res)
    })
    .catch(e => {
      console.error(e)
    })
} else {
  const replLoop = function() {
    return promptp('Program code?> ')
      .then(code => compile(code))
      .then(res => eval(res))
      .then(replLoop)
  }

  replLoop()
}
