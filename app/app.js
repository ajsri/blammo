import React, { Component } from "react"
import ReactDOM from "react-dom"

import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import { Router, Route, hashHistory, Link, IndexRoute } from "react-router"

//
// const logger = createLogger();
// const store = createStore(mainReducer, applyMiddleware(thunk, promise, logger));

class MainApp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          <h1>div testingingesafe</h1>
        )
    }
}
ReactDOM.render(<MainApp/>, document.getElementById("blammo"));