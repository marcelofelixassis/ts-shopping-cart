import { createStore, Store, applyMiddleware } from 'redux';
import rootReducer from './ducks/rootReducer';
import { ProductsState } from './ducks/products/types';
import { CartState } from './ducks/cart/types';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';

export interface AppState {
    products: ProductsState,
    cart: CartState,
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'persistredux',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<AppState> = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};