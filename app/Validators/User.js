'use strict'

class User {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      dj_name: 'required|unique:users'
    }
  }
  get sanitizationRules () {
    return {
      email: 'normalize_email'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = User
