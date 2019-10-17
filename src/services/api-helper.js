import axios from 'axios';
const baseUrl = 'http://localhost:8080/drink'

const api = axios.create({
  baseURL: baseUrl
})

const createDrink = async (data) => {
  const resp = await api.post('/drinks', { drink: data })
  return resp.data
}

const readAllDrinks = async () => {
  const resp = await api.get('/drinks')
  return resp.data
}

const updateDrink = async (id, data) => {
  const resp = await api.put(`/drinks/${id}`, {drink: data })
  return resp.data
}

const destroyDrink = async (id) => {
  const resp = await api.delete(`/drinks/${id}`)
  return resp
}

export {
  createDrink,
  readAllDrinks,
  updateDrink,
  destroyDrink
}