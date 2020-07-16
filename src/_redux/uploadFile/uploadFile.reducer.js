import uploadFileTypes from './uploadFile.types'
import { modifyFiles } from './uploadFile.utils'

const INITIAL_STATE = {
  fileProgress: {
    // format will be like below
    // 1: {
    //   id: 1,
    //   file,
    //   progress: 0,
    //   cancelSource: source,
    //   status: 0,
    // },
  },
}

const fileProgressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uploadFileTypes.SET_UPLOAD_FILE:
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          ...modifyFiles(state.fileProgress, action.payload),
        },
      }

    case uploadFileTypes.SET_UPLOAD_PROGRESS:
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            progress: action.payload.progress,
          },
        },
      }

    case uploadFileTypes.SUCCESS_UPLOAD_FILE:
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            status: 1,
            progress: 100,
            response: action.payload.response
          },
        },
      }

    case uploadFileTypes.FAILURE_UPLOAD_FILE:
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            status: 0,
            progress: 0,
            response: action.payload.response
          },
        },
      }

    default:
      return state
  }
}

export default fileProgressReducer
