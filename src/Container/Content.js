import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../routes';

export default class Content extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <Suspense>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                        )
                    })}
                    <Redirect from="/" to="/apikeys" />
                </Switch>
            </Suspense>
        )
    }
}
