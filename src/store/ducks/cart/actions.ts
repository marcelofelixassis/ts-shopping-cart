import { action } from 'typesafe-actions'
import { CartTypes, CartItem } from './types';

export const addCartItem = (data: CartItem) => action(CartTypes.ADD_CART_ITEM, data);
export const updateCartItem = (data: CartItem) => action(CartTypes.UPDATE_CART_ITEM, data);
export const removeCartItem = (uuid: string) => action(CartTypes.REMOVE_CART_ITEM, uuid);