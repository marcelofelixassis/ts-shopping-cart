import React from 'react';
import { store } from './store';
import Home from './containers/home';
import Cart from './containers/cart';
import { Provider } from 'react-redux';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={ store }>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/cart" component={ Cart } />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Router>
    </Provider>
  );
}
  
export default App;