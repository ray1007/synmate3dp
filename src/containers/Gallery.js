import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//import Typography from 'material-ui/Typography';
import GridList, { GridListTile } from 'material-ui/GridList';

//import MyCard from '../components/MyCard'
import ImageModal from '../containers/ImageModal'

import { setLogMsg, setModalImgPathCaptionAndOpen } from '../actions'


class Gallery extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    imgList: PropTypes.array.isRequired,
    nCols: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
  }

  imgOnClick = (path, caption) =>　(event)　=> {
    this.props.setModalImgPathCaptionAndOpen(path, caption);
  };

  render() {
    return (
      <div>
        <GridList cellHeight={this.props.cellHeight} cols={this.props.nCols}>
          {this.props.imgList.map(img => (
            <GridListTile style={{'border-style': 'solid', 'border-width': '1px', 'border-color':'#f3f3f3'}}
              key={img.title} cols={img.cols || 1}
              onClick={this.imgOnClick(img.imgPath, img.caption)} >
              <img src={img.imgPath} alt={img.caption} />
            </GridListTile>
          ))}
        </GridList>
        <ImageModal />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps, {
  setLogMsg,
  setModalImgPathCaptionAndOpen,
})(Gallery)
