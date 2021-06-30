import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
    data: [],
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartTypes.ADD_CART_ITEM:
            return { ...state, data: [...state.data, action.payload] };
            case CartTypes.UPDATE_CART_ITEM:
            const list = state.data;
            const index = list.findIndex(item => item.uuid === action.payload.uuid);
            list[index] = action.payload;
            return { ...state, data: [...list]};
        case CartTypes.REMOVE_CART_ITEM:
            return { ...state, data: state.data.filter(item => item.uuid !== action.payload) };
        default:
            return state;
    }
}

export default reducer;