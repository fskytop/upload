import React from 'react'
import Styles from './UploadItem.module.css'

const UploadItem = props => {
  const { file, progress, response } = props.file

  let respBlock;
  if (response && response.message === 'success'){
    respBlock = (
      <div>
        <p>![Support from fsky.top]({response.source})</p>
        <p>![Support from fsky.top]({response.resize500})</p>
      </div>
    )
  } else {
    respBlock = <span></span>
  }
  
  return (
    <div className={Styles.wrapperItem}>
      <div className={Styles.leftSide}>
        <div className={Styles.progressBar}>
          <div style={{ width: `${progress}%` }} />
        </div>
        <label>{file.name}</label>
        {respBlock}
      </div>
      <span className={Styles.percentage}>{progress}%</span>
    </div>
  )
}

export default UploadItem
