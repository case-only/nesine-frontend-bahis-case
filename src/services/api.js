import { BASE_URL } from '../consts/api'

async function apiService(url, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, defaultOptions)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export default apiService
