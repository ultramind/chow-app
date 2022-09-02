import axios from 'axios'

// axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: 'https://auth.mychow.app'
})

export default instance
