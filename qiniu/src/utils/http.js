import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})