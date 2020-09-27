import * as yargs from 'yargs'

const args = yargs
  .commandDir('commands')
  .demandCommand()
  .alias('help', 'h')
  .alias('version', 'V')
  .parse()

console.log('Parsed arguments:', args)
