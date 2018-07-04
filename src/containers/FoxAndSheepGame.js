import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import Radio, { RadioGroup } from 'material-ui/Radio';

import Gallery from '../containers/Gallery'

import { styles, foxSheepGalleryData, foxSheepRuleGalleryData } from '../data'
import { setLogMsg, setModalImgPathCaptionAndOpen } from '../actions'


class FoxAndSheepGame extends Component {
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
            產品 / <Link to='/product/boardGame'>棋盤遊戲系列</Link> / 狐狸與羊 Fox & Sheep
          </Typography>
          <Paper style={{padding: 20,}}>
            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              簡介
            </Typography>
            <Grid container justify='space-between'>
              <Grid item xs={1} sm={1}/>
              <Grid item xs={10} sm={10}>
                <Typography variant='subheading' paragraph={true}>
  狐狸與羊據說是中世紀維京人的雙人棋盤遊戲，屬於歐洲<a href='https://en.wikipedia.org/wiki/Tafl_games'>
  板棋</a>的一種。與台灣相對熟悉的象棋、西洋棋比較，最大的特色就是雙方棋盤配置是不公平的：某一方會比另一方更具有優勢，因此遊戲次數通常會是偶數，讓雙方整體而言是公平的。
                </Typography>
                <Typography variant='subheading'>
  這款遊戲的樂趣就在於只要巧妙的運用策略，劣勢方不見得會被優勢方輾壓，因此過去被維京人用來磨練戰略思維。
  以下介紹的遊戲規則出自瑞典赫爾辛堡的Kärnan博物館，我們也提出一些變體以調整遊戲難度，希望大家享受這款遊戲！
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}/>
            </Grid>
            <Divider className={classes.divider} light />


            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              規則
            </Typography>
            <Grid container spacing={24} justify='space-between'>
              <Grid item xs={12} sm={8}>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={11} sm={11}>
                    <Typography className={classes.underline} variant="title" color='default'>開局</Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      雙人回合制棋局。兩人分別扮演2隻狐狸或20隻羊。
                    </Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      2隻狐狸擺在最下方的兩個角落，20隻羊擺在遠離狐狸的對面；完成擺設時，狐狸跟羊中間有兩排空格。
                    </Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      羊的獲勝條件是填滿狐狸所在的九宮格；只要無法達成(例如剩下的羊少於9隻)就是狐狸的勝利。
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                {window.innerWidth > 500
                  ? <Gallery imgList={foxSheepRuleGalleryData.slice(0,1)} cellHeight={(window.innerWidth-120)/6} nCols={2} />
                  : <Gallery imgList={foxSheepRuleGalleryData.slice(0,1)} cellHeight={(window.innerWidth-120)/2} nCols={2} /> }
              </Grid>

              <Grid item xs={12} sm={8}>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={11} sm={11}>
                    <Typography className={classes.underline} variant="title" color='default'>進行</Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      由狐狸先手，雙方每回合一次僅移動一枚棋子。
                    </Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      狐狸移動時可以往任一方向移動一格。羊的移動只能往前進(開局時面對狐狸的方向)或左右橫移，不得後退。所有移動都必須沿著棋盤上的線。
                    </Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      當狐狸沿著線跳過羊，移到羊後面的空格時(像跳棋)，羊就被吃掉了，並把那隻羊移出棋盤。狐狸一次只能跳過一隻羊，不能一次跳過兩隻以上的羊。當羊之間有空格時，狐狸可以進行連續跳躍，吃掉跳躍路徑上所有的羊。
                    </Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      當狐狸被羊包圍，無法進行移動或跳躍時，狐狸就被羊吃掉，並把那隻狐狸移出棋盤。注意狐狸也會互相阻擋。
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                {window.innerWidth > 500
                  ? <Gallery imgList={foxSheepRuleGalleryData.slice(1,3)} cellHeight={(window.innerWidth-120)/6} nCols={2} />
                  : <Gallery imgList={foxSheepRuleGalleryData.slice(1,3)} cellHeight={(window.innerWidth-120)/2} nCols={2} /> }
              </Grid>

              <Grid item xs={12} sm={8}>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={11} sm={11}>
                    <Typography className={classes.underline} variant="title" paragraph={true}>結束</Typography>
                    <Typography variant="subheading" component="h1" paragraph={true}>
                      當羊隻填滿開局時狐狸所在的九宮格，則羊獲得勝利。其他情況下則是狐狸獲得勝利。
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                {window.innerWidth > 500
                  ? <Gallery imgList={foxSheepRuleGalleryData.slice(3,4)} cellHeight={(window.innerWidth-120)/6} nCols={2} />
                  : <Gallery imgList={foxSheepRuleGalleryData.slice(3,4)} cellHeight={(window.innerWidth-120)/2} nCols={2} /> }
              </Grid>

              <Grid item xs={12} sm={8}>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={11} sm={11}>
                    <Typography className={classes.underline} variant="title" paragraph={true}>變體規則</Typography>
                    <Typography variant="subheading" component="h1">
                      若想要增加羊群的難度，可以在開局時逐漸減少羊隻數量。
                    </Typography>
                    <Typography variant="subheading" component="h1">
                      若要降低羊群的難度，可以開放讓羊隻往斜前方移動。
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary'>
              選購
            </Typography>
            <Grid container spacing={24} justify='space-between'>
              <Grid item xs={12} sm={4}>
                <Typography variant="title" className={classes.divTitle}>
                  僅棋子
                </Typography>

                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      您可以只購買棋子，並在此下載棋盤的ppt檔案，用紙張列印棋盤來進行遊戲。
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
                <Grid container spacing={1} justify='center'>
                  <Grid item>
                    <Button variant="raised" color="primary"
                      href='/resources/fox_sheep_board.pptx' download>下載棋盤</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="title" className={classes.divTitle}>
                  PLA棋盤組合
                </Typography>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      以輕盈的PLA材質印製棋盤與棋子，結束遊戲後可將棋子收納於抽屜。
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="title" className={classes.divTitle}>
                  樺木棋盤組合
                </Typography>
                <Grid container spacing={1} justify='space-between'>
                  <Grid item xs={1} sm={1}/>
                  <Grid item xs={10} sm={10}>
                    <Typography variant='subheading' color='default' paragraph={true}>
                      棋面、棋子採用PLA材質印製，棋盤以樺木夾板製成，並打磨出帶有木紋與光滑的表面。
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sm={1}/>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.divider} light />

            <Typography variant="headline" component="h1" color='primary' paragraph={true}>
              照片(點擊圖片可放大)
            </Typography>
            <Gallery imgList={foxSheepGalleryData} cellHeight={(window.innerWidth-120)/4} nCols={4} />

          </Paper>
        </div>
      </div>
    )
  }
}
const FoxAndSheepGameHOC = withStyles(styles)(FoxAndSheepGame)

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
  setModalImgPathCaptionAndOpen,
})(FoxAndSheepGameHOC)
