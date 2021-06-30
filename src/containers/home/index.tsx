import './styles.scss';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { List } from '@material-ui/core';
import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { CartItem } from '../../store/ducks/cart/types';
import { Product } from '../../store/ducks/products/types';
import * as CartActions from '../../store/ducks/cart/actions';
import ProductListItem from '../../components/productListItem';
import * as ProductActions from '../../store/ducks/products/actions';

const Home: React.FC<Props> = (props) => {
  const { products, loadProductsRequest, addCartItem } = props;

  useEffect(() => {
    loadProductsRequest();
  },[loadProductsRequest]);

  return (    
    <List>
      {products.map(product => 
        <ProductListItem
          key={product.id}
          addCartItem={addCartItem}
          product={product}
        />
      )}
    </List>
  );
}

interface StateProps {
  products: Product[],
}

interface DispatchProps {
  loadProductsRequest(): void,
  addCartItem(data: CartItem): void,
}

type Props = StateProps & DispatchProps


const mapStateToProps = (state: AppState) => ({
  products: state.products.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Object.assign({}, ProductActions, CartActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);