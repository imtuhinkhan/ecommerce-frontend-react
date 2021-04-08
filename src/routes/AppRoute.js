import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import Test from "../pages/Test";
import SingleProduct from '../pages/SingleProduct'
class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route  exact path="/" component={HomePage} />
                    <Route  exact path="/test" component={Test} />
                    <Route  exact path="/login" component={Test} />
                    <Route  exact path="/product-details" component={SingleProduct} />
                </Switch>
            </>
        );
    }
}

export default AppRoute;