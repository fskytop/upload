import axios from 'axios'
import uploadFileTypes from './uploadFile.types'

export const setUploadFile = data => ({
  type: uploadFileTypes.SET_UPLOAD_FILE,
  payload: data,
})

export const setUploadProgress = (id, progress) => ({
  type: uploadFileTypes.SET_UPLOAD_PROGRESS,
  payload: {
    id,
    progress,
  },
})

export const successUploadFile = (id, response) => ({
  type: uploadFileTypes.SUCCESS_UPLOAD_FILE,
  payload: {
    id,
    response
  },
})

export const failureUploadFile = (id, response) => ({
  type: uploadFileTypes.FAILURE_UPLOAD_FILE,
  payload: {
    id,
    response
  },
})

export const uploadFile = files => dispatch => {
  if (files.length) {
    files.forEach(async file => {
      const formPayload = new FormData()
      formPayload.append('file', file.file)
      formPayload.append('path', 'wayde/')
      formPayload.append('repository', 'fskytop/images')
      formPayload.append('branch', 'master')

      try {
        await axios({
          baseURL: 'http://localhost:3000',
          url: '/images',
          method: 'post',
          data: formPayload,
          headers: {
            'Content-Type': 'application/json'
          },
          onUploadProgress: progress => {
            const { loaded, total } = progress

            const percentageProgress = Math.floor((loaded / total) * 100)
            dispatch(setUploadProgress(file.id, Math.min(percentageProgress, 98.0)))
          },
        }).then(function (response) {
          dispatch(successUploadFile(file.id, response.data))
        })
      } catch (error) {
        dispatch(failureUploadFile(file.id, {message: "error"}))
      }
    })
  }
}
