import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import Radio, { RadioGroup } from 'material-ui/Radio';

import MyCard from '../components/MyCard'
import Gallery from '../containers/Gallery'

import { styles, weaponShelfGalleryData, boardGameProductList } from '../data'
import { setLogMsg, setModalImgPathCaptionAndOpen } from '../actions'


class BoardGameCategory extends Component {
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
            產品 / 棋盤遊戲系列
          </Typography>
          <Paper style={{padding: 20,}}>
            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              產品特色
            </Typography>
            <Grid container justify='space-between'>
              <Grid item xs={1} sm={1}/>
              <Grid item xs={10} sm={10}>
                <Typography variant='subheading' paragraph={true}>
                  偶爾放下手上的電子遊戲，在經典棋盤遊戲裡享受與對手鬥智的樂趣吧！
                </Typography>
                <Typography variant='subheading' paragraph={true}>
                  {'棋子設計採用低多邊形(Low Poly)設計，便於3D列印輸出，也展現極簡風格。'+
                  '棋盤也設計了抽屜，便於收納棋子。您可以選購3D列印或是手工樺木夾板製作的棋盤。'}
                </Typography>
                <Typography variant='subheading' paragraph={true}>
                  點擊下方頁面，了解更多棋盤遊戲！
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}/>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              棋盤遊戲
            </Typography>
            <Grid container spacing={8} justify='flex-start'>
              {boardGameProductList.map(data => (
                <Grid key={data.title} item xs={12} sm={4}>
                  <MyCard data={{'title': data.title,
                                 'paragraph': data.description,
                                 'img': data.img,
                                 'path': data.path,
                                 'ready': data.ready,}} />
                </Grid>
              ))}

            </Grid>
            <Divider className={classes.divider} light />
          </Paper>
        </div>
      </div>
    )
  }
}
const BoardGameCategoryHOC = withStyles(styles)(BoardGameCategory)

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
  setModalImgPathCaptionAndOpen,
})(BoardGameCategoryHOC)

/*
<Typography variant="headline" component="h1" color='primary' paragraph={true}>
  棋盤遊戲照片(點擊圖片可放大)
</Typography>
<Gallery prefix='../../' imgList={weaponShelfGalleryData} nCols={4} />
*/
