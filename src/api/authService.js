import apiClient from './apiClient'
import { AUTH_API_PATH } from '../config/apiConfig'

export async function login(credentials) {
  const { data } = await apiClient.post(
    `${AUTH_API_PATH}/login`,
    credentials
  )
  return data
}

export async function register(payload) {
  const { data } = await apiClient.post(
    `${AUTH_API_PATH}/register`,
    payload
  )
  return data
}

export async function getCurrentUser() {
  const { data } = await apiClient.get(
    `${AUTH_API_PATH}/me`
  )
  return data
}
