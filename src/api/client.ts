import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNzM5OTI5NzkwLCJleHAiOjE3NDAwMTYxOTB9.QoompttaLW-nEfrAANxEubr4oPFSQz2ydfikeU5n688'
    }
})

export default client