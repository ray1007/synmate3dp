import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import Radio, { RadioGroup } from 'material-ui/Radio';

import Gallery from '../containers/Gallery'

import { styles, textureGalleryData, weaponShelfGalleryData } from '../data'
import { setLogMsg, setModalImgPathCaptionAndOpen } from '../actions'


class IphoneCase extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }
  state = {
    installation_method: 'wall_stick',
  };

  handleInstallChange = (event, value) => {
    this.setState({ installation_method: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.content}>
          <Typography variant="headline" component="h1" color='primary' paragraph={true}>
            產品 / iphone保護套系列
          </Typography>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              產品特色
            </Typography>
            <Grid container justify='space-between'>
              <Grid item xs={1} sm={1}/>
              <Grid item xs={10} sm={10}>
                <Typography variant='subheading' paragraph={true}>
                  {'iphone保護套以尼龍材質印製\n'+
                  '鏤刻客製化圖樣'}
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}/>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              經典紋理
            </Typography>
            <Grid container spacing={1} justify='space-between' style={{'marginBottom': 25}}>
              <Grid item xs={12} sm={3}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  素面
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  漣漪
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  線條
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  ガッキー
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              客製化圖樣鏤刻
            </Typography>
            <Grid container spacing={1} justify='space-between'>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      鏤刻
                    </Typography>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      提供svg檔，dxf檔
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                {window.innerWidth > 500
                  ? <Gallery imgList={textureGalleryData} cellHeight={(window.innerWidth-120)/4} nCols={2} />
                  : <Gallery imgList={textureGalleryData} cellHeight={(window.innerWidth-120)/2} nCols={2} /> }
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              QR code嵌埋
            </Typography>
            <Grid container spacing={1} justify='space-between'>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      嵌埋
                    </Typography>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      提供QR code
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                {window.innerWidth > 500
                  ? <Gallery imgList={textureGalleryData} cellHeight={(window.innerWidth-120)/4} nCols={2} />
                  : <Gallery imgList={textureGalleryData} cellHeight={(window.innerWidth-120)/2} nCols={2} /> }
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              機型與尺寸
            </Typography>
            <Grid container spacing={1} justify='space-between' style={{'marginBottom': 25}}>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  iphone 6+/6s+
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  iphone 7/8
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              實際使用案例(點擊圖片可放大)
            </Typography>
            <Gallery imgList={weaponShelfGalleryData} cellHeight={(window.innerWidth-120)/4} nCols={4} />

          </Paper>
        </div>
      </div>
    )
  }
}
const IphoneCaseHOC = withStyles(styles)(IphoneCase)

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
  setModalImgPathCaptionAndOpen,
})(IphoneCaseHOC)
