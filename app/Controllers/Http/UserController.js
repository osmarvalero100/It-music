'use strict'
const Mail = use('Mail')
class UserController {
  async store({request}){
    /*
    await Mail.raw('plain text email', (message) => {
      message
        .to('osmarvalero100@gmail.com')
        .from('it.colombia.@gmail.com')
        .subject('Welcome to IT MUSIC')
    })
    */

    await Mail.send('emails.welcome', {user: "Osmar"}, (message) => {
      message
      .to('osmarvalero100@gmail.com')
      .from('it.colombia.@gmail.com')
      .subject('Welcome to IT MUSIC')
    })
    return { greeting: 'Hello world in MAIL' }
  }
}

module.exports = UserController
