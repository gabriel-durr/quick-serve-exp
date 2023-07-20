import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'

const api = axios.create({
  baseURL: isProduction ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_LOCAL_API_URL
})

export { api }
