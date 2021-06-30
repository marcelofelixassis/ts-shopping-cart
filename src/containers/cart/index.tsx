import "./styles.scss";
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import DeleteIcon from '@material-ui/icons/Delete';
import { numberToReal } from '../../utils/formater';
import { bindActionCreators, Dispatch } from "redux";
import { CartItem } from '../../store/ducks/cart/types';
import * as CartActions from '../../store/ducks/cart/actions';
import { 
  Table,
  TextField,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from '@material-ui/core';

const Cart: React.FC<Props> = (props) => {
  const { cartItens, updateCartItem, removeCartItem } = props;

  function handleChangeQtd(item: CartItem, value: string) {
    item.totalPrice = (parseFloat(value) * parseFloat(item.price));
    item.qtd = parseInt(value);
    updateCartItem(item)
  }

  function handleDeleteItem(uuid: string) {
    removeCartItem(uuid)
  }

  function handleClickCheckout() {
  
  }

  return(
    <>
      <TableContainer component={Paper} className="cart-table">
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Preço Unitario</TableCell>
              <TableCell align="center">Quantidade</TableCell>
              <TableCell align="center">Valor Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItens.length > 0 && cartItens.map((row) => (
              <TableRow key={row.uuid}>
                <TableCell>
                  <img width="200" src={row.image} alt={`img-${row.name}`} />
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{numberToReal(parseFloat(row.price))}</TableCell>
                <TableCell align="center">
                  <TextField
                    label="Quantidade"
                    type="number"
                    variant="outlined"
                    size="small"
                    inputProps={{
                      min: 1
                    }}
                    value={row.qtd}
                    onChange={(e) => handleChangeQtd(row, e.target.value)}
                  />
                </TableCell>
                <TableCell align="center">{numberToReal(row.totalPrice)}</TableCell>
                <TableCell align="center">
                <IconButton aria-label="delete" onClick={() => handleDeleteItem(row.uuid)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleClickCheckout}
      >
        Finalizar compra
      </Button>
    </> 
  ) 
}

interface StateProps {
  cartItens: CartItem[];
}

interface DispatchProps {
  updateCartItem(data: CartItem): void,
  removeCartItem(uuid: string): void,
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
  cartItens: state.cart.data, 
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
