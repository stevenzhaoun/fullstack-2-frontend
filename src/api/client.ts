import axios from 'axios'

const client = axios.create({
    // baseURL: import.meta.env.API_URL || 'http://localhost:8888',/
    baseURL: 'https://fullstack-2-backend.onrender.com'
})

export default client