import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductsTypes.LOAD_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case ProductsTypes.LOAD_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload };
        case ProductsTypes.LOAD_PRODUCTS_ERROR:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
}

export default reducer;