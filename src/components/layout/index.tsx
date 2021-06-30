import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";
import { 
    Container,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge
} from '@material-ui/core';

const ProductListItem: React.FC<Props> = (props) => {
    const history = useHistory();
    const { cartLength, children } = props;

    return(
        <div>
            <AppBar position="static" style={{flexGrow: "inherit"}}>
                <Toolbar className="header">
                    <div onClick={() => history.push("/")} className="title">
                        <Typography variant="h6">
                            Lista de produtos
                        </Typography>
                    </div>
                    <IconButton color="inherit" onClick={() => history.push("/cart")}>
                        <Badge badgeContent={cartLength | 0} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container className="body-container" maxWidth="lg">
                <div>
                    {children}
                </div>
            </Container> 
        </div>
    )
}

interface OwnProps {
    children?: React.ReactNode,
}

interface StateProps {
    cartLength: number,
}

type Props = StateProps & OwnProps;

const mapStateToProps = (state: AppState) => ({
    cartLength: state.cart.data.length,
})

export default connect(mapStateToProps)(ProductListItem);