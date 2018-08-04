import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import Radio, { RadioGroup } from 'material-ui/Radio';

import Gallery from '../containers/Gallery'

import { styles, textureGalleryData, weaponShelfGalleryData, iphoneCaseCustomGalleryData } from '../data'
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
                  製作一副專屬於您的手機保護套吧！
                </Typography>
                <Typography variant='subheading' paragraph={true}>
                  以尼龍材質印製的半透明保護套，具有韌性且能夠吸收衝擊力，您可以選擇鏤刻簡潔的紋理或是客製化圖樣，替您的手機增添創意與個性！
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
                  雲雷
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
                      利用3D列印技術，我們將替您在手機殼背板鏤刻出獨一無二的圖樣。可以用於製作家人、朋友、情侶專屬的禮物，或是社團、活動紀念品。
                    </Typography>
                    <Typography variant='subheading' color='primary' paragraph={true}>
                      圖樣規格
                    </Typography>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      鏤刻圖樣中可以含有文字，惟最小線條寬度須大於1mm，以確保鏤刻效果。<br/>
                      上傳的圖樣格式須為svg、dxf，並以顏色區分鏤刻、保留的區域。<br/>
                      您可以參考這段範例影片，並下載我們提供的公版，開始使用inkscape或adobe illustrator做畫。<br/>
                      或者您也可以選擇上傳點陣圖(jpg、png檔)，由我們替您描繪成向量圖檔 (將另酌收費用)。<br/>
                    </Typography>
                    <Typography variant='subheading' color='primary' paragraph={true}>
                      範例影片
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                {window.innerWidth > 500
                  ? <Gallery imgList={iphoneCaseCustomGalleryData} cellHeight={(window.innerWidth-120)/6} nCols={3} />
                  : <Gallery imgList={iphoneCaseCustomGalleryData} cellHeight={(window.innerWidth-120)/2} nCols={3} /> }
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              公版下載
            </Typography>
            <Grid container spacing={1} justify='space-between' style={{'marginBottom': 25}}>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={1} justify='center'>
                  <Grid item>
                    <Button variant="raised" color="primary"
                      href='/resources/fox_sheep_board.pptx' download>iphone 6+/6s+</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={1} justify='center'>
                  <Grid item>
                    <Button variant="raised" color="primary"
                      href='/resources/iphone7n8.svg' download>iphone 7/8</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={1} justify='center'>
                  <Grid item>
                    <Button disabled variant="raised" color="primary"
                      href='/resources/fox_sheep_board.pptx' download>iphone X</Button>
                  </Grid>
                </Grid>
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

/*
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
*/
