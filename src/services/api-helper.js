import axios from 'axios';
const baseUrl = 'http://localhost:8080/'

const api = axios.create({
  baseURL: baseUrl
})

const createDrink = async (data) => {
  const resp = await api.post('/drink', { drink: data })
  return resp.data
}

const readAllDrinks = async () => {
  const resp = await api.get('/drink')
  return resp.data
}

const updateDrink = async (id, data) => {
  const resp = await api.put(`/drink/${id}`, {drink: data })
  return resp.data
}

const destroyDrink = async (id) => {
  const resp = await api.delete(`/drink/${id}`)
  return resp
}

export {
  createDrink,
  readAllDrinks,
  updateDrink,
  destroyDrink
}