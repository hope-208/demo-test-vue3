import axios from 'axios'
import { ElNotification } from 'element-plus'

export const Request = axios.create({
 baseURL: "https://api.caiman-app.de/api"
})
Request.interceptors.request.use((config) => { return config })
Request.interceptors.response.use((response) => {
 return response
}, (error) => {
 if (error.response.status === 422) { return error.response }
 else if (error.response.status === 500) {
  ElNotification({
   title: 'Ошибка сервера!',
   message: 'Попробуйте позднее.',
   type: 'error'
  })
  return false
 }
 return Promise.reject(error)
})
