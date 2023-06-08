import axios from 'axios'
import { SERVER_URL, TOKEN } from '@helpers'

export const $axios = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
})

$axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`
  return config
})

$axios.interceptors.response.use(
  config => config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get(`${SERVER_URL}/refresh`, {
          withCredentials: true,
        })
        localStorage.setItem(TOKEN, response.data.accessToken)
        return $axios.request(originalRequest)
      } catch (e) {
        console.log('Не авторизован')
      }
    }
  },
)
