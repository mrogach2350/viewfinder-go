import axios from 'axios'

export const fetchLocalApi = async (): Promise<any> => {
  const result = await axios.get('/api/weapons')
  return result.data
}