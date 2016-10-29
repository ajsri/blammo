import React, { Component } from "react"
import ReactDOM from "react-dom"

import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import { Router, Route, hashHistory, Link, IndexRoute } from "react-router"

import mainReducer from './reducers/index'

import MainApp from './components/Main'
import Overview from './containers/Overview'
import Weapons from './containers/Weapons'
import Ammunition from './containers/Ammunition'

import "./styles/blammo.scss"

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(thunk, promise, logger));

ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={MainApp}>
            <IndexRoute component={Overview}/>
            <Route path="/weapons">
                <IndexRoute component={Weapons} />
                <Route path="/weapons/:id" component={Ammunition}/>
            </Route>
            <Route path="/ammo" component={Ammunition} />
        </Route>
    </Router>
</Provider>, document.getElementById("blammo"));