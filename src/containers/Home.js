import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
//import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import MyCard from '../components/MyCard'

import { setLogMsg } from '../actions'
import { styles, productData } from '../data'


class Home extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.content}>
          <div className={classes.jumbo}>
            <Divider light className={classes.divider} />
            <Typography variant="subheading" color='default' >
              合友的成員是一群對3D列印技術有興趣、喜愛動手做一些小玩意的的自造者們。
              <br/>
              這裡展示的製品是在我們自己的生活中被頻繁使用，認為其他人可能也有相同需求，因而進行小量販賣。
              <br/>
              我們希望在持續的創作中，保持自己對周遭事物的好奇心；也透過美觀實用的製品，增添生活中的趣味。
            </Typography>
            <Divider light className={classes.divider} />
          </div>
        </div>

        <div className={classes.content}>
          <Typography variant="headline" component="h1" color='primary' paragraph={true}>
            產品展示
          </Typography>
          <Grid container spacing={8} justify='space-between'>
            {productData.map(data => (
              <Grid key={data.category_name} item xs={12} sm={4}>
                <MyCard data={{'title': data.category_name,
                               'paragraph': data.description,
                               'img': data.category_img,
                               'path': data.path,
                               'ready': data.ready,}} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}

const HomeHOC = withStyles(styles)(Home)

const mapStateToProps = (state, ownProps) => ({
})

export default withRouter(connect(mapStateToProps, {
  setLogMsg,
})(HomeHOC))
