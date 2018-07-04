import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { productData } from '../data'

export default class MyNavLinks extends Component {
  static propTypes = {
    // Injected by React Redux
  }

  state = {
    categoryOpen: false,
    marketOpen: false,
  }

  handleCategoryClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      categoryOpen: true,
      categoryAnchorEl: event.currentTarget,
    });
  };

  handleCategoryClose = () => {
    this.setState({
      categoryOpen: false,
    });
  };

  handleMarketClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      marketOpen: true,
      marketAnchorEl: event.currentTarget,
    });
  };

  handleMarketClose = () => {
    this.setState({
      marketOpen: false,
    });
  };

  render() {
    return (
      <div>
        <div style={{'width': 20}}/>
        <Button color="inherit" href='/' >首頁</Button>
        <Button color="inherit" onClick={this.handleCategoryClick}>產品分類</Button>
        <Menu
            id="menu-appbar"
            anchorEl={this.state.categoryAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.categoryOpen}
            onClose={this.handleCategoryClose}
          >
          {productData.map(data => {
            if(data.ready){
              return (
                <MenuItem key={data.category_name} component={Link} to={data.path}
                      onClick={this.handleCategoryClose}>
                      {data.category_name}
                </MenuItem>
              )
            } else {
              return (
                <MenuItem key={data.category_name} onClick={this.handleCategoryClose}>
                        {data.category_name}(頁面建立中)
                </MenuItem>
              )
            }
          })}
        </Menu>

        <Button color="inherit" href="/about">聯絡我們</Button>
      </div>
    )
  }
}

/*
<Button color="inherit" onClick={this.handleMarketClick}>前往賣場</Button>
<Menu
    id="menu-market"
    anchorEl={this.state.marketAnchorEl}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={this.state.marketOpen}
    onClose={this.handleMarketClose}
  >
  <MenuItem onClick={this.handleMarketClose}
    component={Button} href="http://class.ruten.com.tw/user/index00.php?s=quadratic_iris">
    露天拍賣
  </MenuItem>
  <MenuItem onClick={this.handleMarketClose}
    component={Button} href="https://shopee.tw/quadratic_iris">
    蝦皮拍賣
  </MenuItem>
</Menu>
*/
