import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './components/home/dashboard';
import NewWishlist from './components/list/Wishlist';
import Error from './components/404';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path ="/" component={Dashboard} exact />
                    <Route path ="/new" component={NewWishlist} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;