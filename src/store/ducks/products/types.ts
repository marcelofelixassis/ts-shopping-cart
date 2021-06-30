export enum ProductsTypes {
    LOAD_PRODUCTS_REQUEST = '@users/LOAD_PRODUCTS_REQUEST',
    LOAD_PRODUCTS_SUCCESS = '@users/LOAD_PRODUCTS_SUCCESS',
    LOAD_PRODUCTS_ERROR = '@users/LOAD_PRODUCTS_ERROR',
}

export interface Product {
    id: string,
    createdAt: string,
    name: string,
    price: string,
    image: string,
    stock: number,
}

export interface ProductsState {
    data: Product[],
    error: boolean,
    loading: boolean,
}