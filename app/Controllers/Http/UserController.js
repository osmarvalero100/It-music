'use strict'

const Mail = use('Mail')
const User = use('App/Models/User');

class UserController {

  async store({request, response}){
    const {email, password, dj_name} = request.all();

    const user = await User.create({
      email,
      password,
      dj_name
    });
    // Enviar email para activar cuenta
    await Mail.send('emails.welcome', {user: user.dj_name, id: user.id}, (message) => {
      message
      .to(user.email)
      .from('it.colombia.@gmail.com')
      .subject('Activa tu cuenta - IT MUSIC')
    })

    const data = {
      'message': `Cuenta creada. Ingresa a tu correo (${user.email}) y busca en tu bandeja de entrada el correo de activación de tu cuenta.`
    };

    return response.status(201).json(data)
  }

  async enable({params, response}) {
    const id = params.id;
    const user = await User.find(id);
    user.merge({active: true});
    await user.save()
    // Redirige a la URL del cliente del API
    response.redirect('http://localhost:8080');
  }
}

module.exports = UserController
