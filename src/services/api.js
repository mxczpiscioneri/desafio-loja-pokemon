import Axios from 'axios'
import { apiTimeout, apiUrl } from '../common/constants/env'

const axiosInstance = Axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: apiTimeout
})

export default axiosInstance
