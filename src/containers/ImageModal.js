import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//import Grid from 'material-ui/Grid';
//import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal';

import { setLogMsg, setModalImgPathCaptionAndOpen, setModalOpen } from '../actions'


const styles = {
  modal: {
    top: '5%',
    left:'25%',
    width: '50%',
    backgroundColor: '#EEEEEE',
    padding: '1%',
    position: 'absolute',
  },
  img: {
    width:　'100%'
  },
};

class ImageModal extends Component {
  static propTypes = {
    // Injected by React Redux
    setLogMsg: PropTypes.func.isRequired,
    setModalImgPathAndOpen: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    imagePath: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }

  handleClose = () => {
    this.props.setModalOpen(false);
  }

  render() {
    return (
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.handleClose}
        >
          <div style={styles.modal}>
            <img style={styles.img} src={this.props.imagePath} alt='ImageModal img'/>
            <Typography variant='title' color='default' style={{'margin': '20 0'}}>
              {this.props.caption}
            </Typography>
          </div>
        </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  open: state.modal.open,
  imagePath: state.modal.imagePath,
  caption: state.modal.caption,
})

export default connect(mapStateToProps, {
  setLogMsg,
  setModalImgPathCaptionAndOpen,
  setModalOpen,
})(ImageModal)
