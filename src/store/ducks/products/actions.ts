import { action } from 'typesafe-actions'
import { ProductsTypes, Product } from './types';

export const loadProductsRequest = () => action(ProductsTypes.LOAD_PRODUCTS_REQUEST);
export const loadProductsSuccess = (data: Product[]) => action(ProductsTypes.LOAD_PRODUCTS_SUCCESS, data);
export const loadProductsError = () => action(ProductsTypes.LOAD_PRODUCTS_ERROR);