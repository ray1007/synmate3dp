import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { Link, browserHistory } from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList';
import Button from 'material-ui/Button';


class MyGridTile extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  render() {
    return (
      <GridTile
        key={this.props.data.key}
        cols={this.props.data.cols}
        title='grid title'
        subtitle={<Button label="Action1"/>} >
        <img src="images/nature-600-337.jpg" alt="photos" />
      </GridTile>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
})(App)
