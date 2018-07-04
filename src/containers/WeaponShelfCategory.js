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


class WeaponShelfCategory extends Component {
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
            產品 / 兵器架系列
          </Typography>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              產品特色
            </Typography>
            <Grid container justify='space-between'>
              <Grid item xs={1} sm={1}/>
              <Grid item xs={10} sm={10}>
                <Typography variant='subheading' paragraph={true}>
                  {'以聚乳酸材質印製的刀架輕盈強韌，壁貼式兵器架最多可承重2公斤(左右各1公斤)；刀架間距可依不同兵器調整，並搭配仿中國古青銅器的花紋，兼顧實用與美感。\n'+
                  '依實際兵器尺寸繪製的圖像式安裝說明書，作為預覽安裝結果之用，並引導使用者自行進行安裝，是提供給使用者的貼心設計。'}
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}/>
            </Grid>
            <Divider className={classes.divider} light />

            <Grid container spacing={1} justify='space-between' style={{'marginBottom': 25}}>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  安裝
                </Typography>
                <Grid container justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      以下安裝影片示範透過圖像式安裝說明書，自行安裝兵器架。
                    </Typography>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      <span className={classes.underline}>提醒您</span>：安裝前將牆上粉塵清除，並確實用力按壓膠條30秒且靜候24小時，避免影響膠條黏性，造成人員受傷或兵器損壞。
                    </Typography>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      {'如欲測試膠條強度，建議可以掛上重物測試(例如裝滿水的寶特瓶或啞鈴)。'+
                       '請避免用手直接拉扯兵器架，單支兵器架的安全承重僅1公斤，用手拉扯可能會超出限制。'}
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <iframe title='wall_stick_vid' width="95%" height="315"
                        src="https://www.youtube.com/embed/tenEhA2KDK0"
                        frameborder="0" allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Grid container spacing={1} justify='space-between'>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" component="h1" color='primary' paragraph={true}>
                  花紋與顏色
                </Typography>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      利用3D列印技術，做出曲面上的雕刻效果，並仿製中國古代青銅器上的雲雷紋，替兵器增添美感。
                    </Typography>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      顏色提供紅銅、鈦金兩種選擇，建議搭配牆壁與兵器的顏色。
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
              實際使用案例(點擊圖片可放大)
            </Typography>
            <Gallery imgList={weaponShelfGalleryData} cellHeight={(window.innerWidth-120)/4} nCols={4} />

          </Paper>
        </div>
      </div>
    )
  }
}
const WeaponShelfCategoryHOC = withStyles(styles)(WeaponShelfCategory)

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
  setModalImgPathCaptionAndOpen,
})(WeaponShelfCategoryHOC)

/*
使用鋁擠型作為骨架，方便迅速的拆裝，並可自由調整多層刀架的間距。拆卸後可以大大減少收納空間。

<Typography variant="subheading" component="p" paragraph={true}>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={styles.bold}>壁貼式刀架</span>{'是我們生產的第一款的兵器架。'+
  '設計初衷是想要一組不必破壞牆面就能安裝的刀架，'+
  '以便在自己房裡擺放兵器。因此採用3M無痕膠條進行固定，'+
  '一組刀架可以承重2公斤，足夠支撐大部分的兵器且不傷牆面。'}
  {'刀架使用聚乳酸(PLA)材質印製，材質輕盈，'+
  '也加上了東方元素的花紋雕刻，並搭配圖像式安裝說明書，'+
  '刀身依照成鋒刀劍牛尾刀的尺寸繪製，引導使用者進行安裝。'}
</Typography>
<Typography variant="subheading" component="p" paragraph={true}>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  接著我們也製作了用螺絲固定的<span style={styles.bold}>壁掛式刀架</span>
  {'，提供相對無痕膠條更強健的安裝選擇。'+
  '而針對需要多層刀架的空間，例如道館或展場，'+
  '我們設計了'}<span style={styles.bold}>快拆站立式刀架</span>
  {'，便於置放多層刀架、拆卸容易，且拆卸後易於收納、'}
</Typography>

<Typography variant="headline" component="h1" color='primary' paragraph={true}>
  選擇款式
</Typography>
<FormControl component="fieldset" required>
  <FormLabel component="legend">安裝方式</FormLabel>
  <RadioGroup
    aria-label="installation_method"
    name="installation_method"
    value={this.state.installation_method}
    onChange={this.handleInstallChange}
  >
    <FormControlLabel value="wall_stick" control={<Radio />} label="壁貼式(無痕膠條)" />
    <FormControlLabel value="wall_screw" control={<Radio />} label="壁掛式(螺絲固定)" />
    <FormControlLabel value="floor" control={<Radio />} label="站立式" />
  </RadioGroup>
</FormControl>
<Divider style={styles.divider} light />

<Grid item xs={4} sm={4}>
  <Typography variant="title" color='default'>
    快拆站立式
  </Typography>
  <Typography color='default'>

  </Typography>
  <Typography variant="display2" color='default' paragraph={true}>
    <br/><br/>開發中！
  </Typography>
</Grid>



<Grid container spacing={16} justify='space-between'>
  <Grid item xs={12} sm={6}>
    <Grid container justify='space-between'>
      <Grid item xs={1} sm={1}/>
      <Grid item xs={11} sm={11}>
        <Typography variant="title" color='default'>
          壁貼式(無痕膠條)
        </Typography>

        <iframe title='wall_stick_vid' width="95%" height="315"
                src="https://www.youtube.com/embed/tenEhA2KDK0"
                frameborder="0" allow="autoplay; encrypted-media"
                allowfullscreen></iframe>
      </Grid>
    </Grid>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Grid container justify='space-between'>
      <Grid item xs={11} sm={11}>
        <Typography variant="title" color='default'>
          壁掛式(螺絲固定)
        </Typography>
        <Typography color='default'>
          將壁貼式兵器架中的膠條改成螺絲，提供更穩固的支撐。
        </Typography>
        <Typography variant="display2" color='default' paragraph={true}>
          <br/><br/>影片製作中！
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1}/>
    </Grid>
  </Grid>
</Grid>

*/
