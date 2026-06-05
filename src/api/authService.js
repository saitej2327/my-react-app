import axios from 'axios'
import { API_BASE_URL, AUTH_API_PATH } from '../config/apiConfig'

const api = axios.create({
  baseURL: `${API_BASE_URL}${AUTH_API_PATH}`,
})

export async function login(credentials) {
  const { data } = await api.post('/login', credentials)
  return data
}

export async function register(payload) {
  const { data } = await api.post('/register', payload)
  return data
}
