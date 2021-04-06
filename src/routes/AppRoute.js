import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import Test from "../pages/Test";

class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route  exact to="/" component={HomePage} />
                    <Route  exact to="/test" component={Test} />
                </Switch>
            </>
        );
    }
}

export default AppRoute;