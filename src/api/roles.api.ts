import client from './client'

export const getRoles = async () => {
    const response = await client.get('/roles')
    return response.data
}