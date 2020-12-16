import config from '../config'

const AuthApiService = {
  postSignin(credentials) {
      debugger
    return fetch(`${config.API_ENDPOINT}/auth/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthApiService