'use strict'

class User {
  get rules () {
    return {
      email: 'required|email|unique:users',
      dj_name: 'required|unique:users',
      gender: 'required',
      password: 'required',
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
