export type Role = {
    id: number
    name: string
}

export type User = {
    id: number
    name: string
    email: string
    roleId: number
    password?: string
}

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
}

export type Order = {
    id: number;
    name: string;
    email: string;
    total: number;
    createdAt: string;
    products: Product[];
}

