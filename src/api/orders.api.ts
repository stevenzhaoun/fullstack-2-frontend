import { Order } from "../types"
import client from "./client"

export const listOrders = async () => {
    const {data} = await client.get('/orders')
    return data as Order[]
}