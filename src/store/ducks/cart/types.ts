import { Product } from "../products/types";

export enum CartTypes {
    ADD_CART_ITEM = '@users/ADD_CART_ITEM',
    UPDATE_CART_ITEM = '@users/UPDATE_CART_ITEM',
    REMOVE_CART_ITEM = '@users/REMOVE_CART_ITEM',
}

export interface CartItem extends Product {
    uuid: string,
    qtd: number,
    totalPrice: number,
}

export interface CartState {
    data: CartItem[],
}