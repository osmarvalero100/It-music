'use strict'
const Mail = use('Mail')
const User = use('App/Models/User');

class UserController {

  async store({request, response}){
    /*
    await Mail.raw('plain text email', (message) => {
      message
        .to('osmarvalero100@gmail.com')
        .from('it.colombia.@gmail.com')
        .subject('Welcome to IT MUSIC')
    })
    */
    /*
    await Mail.send('emails.welcome', {user: "Osmar"}, (message) => {
      message
      .to('osmarvalero100@gmail.com')
      .from('it.colombia.@gmail.com')
      .subject('Welcome to IT MUSIC')
    })
    return { greeting: 'Hello world in MAIL' }
    */
    const {email, password, dj_name} = request.all();

    const user = await User.create({
      email,
      password,
      dj_name
    });

    const data = {
      'message': `Tu cuenta se creo correctamente, por favor ingresa a tu correo (${user.email}) para activarla`
    };
    return response.status(201).json(data)
  }
}

module.exports = UserController
