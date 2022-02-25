import React, { Component } from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Home from './pages/home';
import Button from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import NoMatch from './Nomatch/index';

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/buttons" component={Button} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loading} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    {/* <Redirect to="/home" />     重定向 */}
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
