import axios from 'axios';
import { call, put } from 'redux-saga/effects'
import { loadProductsError, loadProductsSuccess } from '../products/actions';

const api = axios.create({
  baseURL: 'https://5d6da1df777f670014036125.mockapi.io/api/v1/',
});

export function* load() {
  const {error, data} = yield call(api.get, 'product');
  if(!error) {
    yield put(loadProductsSuccess(data));
  } else {
    yield put(loadProductsError());
  }
}
