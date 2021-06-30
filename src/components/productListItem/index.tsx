import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { numberToReal } from '../../utils/formater';
import { CartItem } from '../../store/ducks/cart/types';
import { Product } from '../../store/ducks/products/types';
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Button,
    TextField
} from '@material-ui/core';

type Props = OwnProps;

interface OwnProps {
    product: Product,
    addCartItem(cartitem: CartItem): void,
}

const ProductListItem: React.FC<Props> = (props) => {
    const { product, addCartItem } = props;
    const [qtdField, setQtdField] = useState<string>("0");

    function handleClickAddToCart(product: Product, qtd: number) {
        if(qtd && qtd > 0) {
            let cartitem = {...product, qtd} as CartItem;
            cartitem.uuid = uuidv4();
            cartitem.totalPrice = (qtd * parseFloat(product.price));
            addCartItem(cartitem);
            setQtdField("0");
          } else {
            alert("Quantidade inválida!");
        }
    }

    return(
        <ListItem>
            <ListItemAvatar>
                <img className="product-image-list" src={product.image} alt={`img-${product.name}`} />
            </ListItemAvatar>
            <ListItemText
                className="product-info-list"
                primary={product.name}
                secondary={numberToReal(parseFloat(product.price))}
            />
            <ListItemSecondaryAction>
                <TextField
                    className="product-qtd-field-list"
                    label="Quantidade"
                    type="number"
                    variant="outlined"
                    size="small"
                    value={qtdField}
                    onChange={(e) => setQtdField(e.target.value)}
                    inputProps={{
                        min: 0,
                    }}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleClickAddToCart(product, parseInt(qtdField))}
                >
                    Adcionar ao carrinho
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
}


export default ProductListItem;