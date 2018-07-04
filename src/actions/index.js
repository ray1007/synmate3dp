import axios from 'axios';

// some log
export const SET_LOG_MSG = "SET_LOG_MSG"
// action creator
export const setLogMsg = (msg) => ({
  type: SET_LOG_MSG,
  msg
})

export const SET_MODAL_OPEN = "SET_MODAL_OPEN"
export const setModalOpen = (open) => ({
  type: SET_MODAL_OPEN,
  open
})

export const SET_MODAL_IMG_PATH_CAPTION_OPEN = "SET_MODAL_IMG_PATH_CAPTION_OPEN"
export const setModalImgPathCaptionAndOpen = (path, caption) => ({
  type: SET_MODAL_IMG_PATH_CAPTION_OPEN,
  path, caption
})
