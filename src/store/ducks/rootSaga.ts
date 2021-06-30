import { all, takeLatest } from "redux-saga/effects";
import { ProductsTypes } from './products/types';
import { load } from './products/sagas';

export default function* rootSaga() {
    yield all([
        takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, load),
    ]);
}
