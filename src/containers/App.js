/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import MyNavLinks from '../components/MyNavLinks'
import Home from './Home'
import About from './About'
import WeaponShelfCategory from './WeaponShelfCategory'
import BoardGameCategory from './BoardGameCategory'
import FoxAndSheepGame from './FoxAndSheepGame'
import IphoneCase from './IphoneCase'


import { setLogMsg } from '../actions'

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" >
              合友3D列印 Synmate
            </Typography>
            <div style={{'width': 20}}/>
            <MyNavLinks/>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/product/weaponShelf" component={WeaponShelfCategory}/>
          <Route exact path="/product/boardGame" component={BoardGameCategory}/>
          <Route path="/product/boardGame/foxAndSheep" component={FoxAndSheepGame}/>
          <Route path="/product/IphoneCase" component={IphoneCase}/>
        </Switch>

        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default withRouter(connect(mapStateToProps, {
  setLogMsg
})(App))
