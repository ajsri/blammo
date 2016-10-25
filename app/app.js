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

import "./styles/blammo.scss"

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(thunk, promise, logger));

ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={MainApp}></Route>
    </Router>
</Provider>, document.getElementById("blammo"));