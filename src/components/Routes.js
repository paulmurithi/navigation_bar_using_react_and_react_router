import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import React, { Component } from 'react'

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/about" component={ About } />
            </Switch>
        )
    }
}

