import apiService from './api'

export async function getBetsData() {
  try {
    return await apiService('bets')
  } catch (error) {
    console.error('Error:', error)
  }
}
