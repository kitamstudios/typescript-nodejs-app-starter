export const command = 'sayHello [message]'

export const desc = 'Say hello to ...'

export const builder = {
  message: { default: 'world' },
}

export const handler = (argv: { message: any }) => {
  console.log(`Hello ${argv.message}!`)
}
