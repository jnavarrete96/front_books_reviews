import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getBooks = async () => {
  const response = await apiClient.get('/books')
  return response.data
}
