import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

//import xxIcon from 'mdi-react/xxIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon'

import { setLogMsg } from '../actions'
import { styles } from '../data'

class About extends Component {
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
          <Typography variant="headline" component="h1" color='primary' paragraph={true}>
            聯絡我們
          </Typography>
          <Paper style={{'padding': '20'}}>
            <div className={classes.jumbo}>
              <div style={{'textAlign': 'center'}}>
                <Divider light className={classes.divider} />
                <Typography variant='title' color='default' paragraph={true}>
                  若有客製化製作的需求，或是訂購量超過10件以上，歡迎您主動向我們聯繫。
                </Typography>
                <Divider light className={classes.divider} />
                <br/>
                <br/>
              </div>
            </div>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={3} style={{'textAlign': 'center'}}>
                <EmailOutlineIcon color="#000000" size={72}/>
                <Typography variant="title" color='default'>
                  Email
                </Typography>
                <Typography color='default'>
                  synmate3dp@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} style={{'textAlign': 'center'}} >
                <Button href="https://www.facebook.com/synmate3dp/" >
                  <FacebookBoxIcon color="#3b5998" size={72} />
                </Button>
                <Typography variant="title" color='default'>
                  臉書粉絲專頁
                </Typography>
              </Grid>

            </Grid>
            <br/>
            <br/>

          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
})(withStyles(styles)(About))

/*
<Grid item xs={3} sm={3} style={{'textAlign': 'center'}}>
  <a href="http://class.ruten.com.tw/user/index00.php?s=quadratic_iris"><img src="https://www.ruten.com.tw/images/user_button.png" alt="歡迎參觀我的賣場" width="80" height="80" vspace="5" border="0" /></a>
  <Typography variant="title" color='default'>
    露天拍賣
  </Typography>
</Grid>
<Grid item xs={3} sm={3} style={{'textAlign': 'center'}}>
  <a href="https://shopee.tw/quadratic_iris">
    <img src="/images/shopee-logo.png" alt="歡迎參觀我的賣場" width="80" height="80" vspace="5" border="0" /></a>
  <Typography variant="title" color='default'>
    蝦皮拍賣
  </Typography>
</Grid>
*/
