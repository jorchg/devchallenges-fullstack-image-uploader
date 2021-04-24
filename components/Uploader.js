import { useRef } from 'react'
import { post } from 'axios'
import styles from '../styles/Uploader.module.css'

export default function Uploader(props) {
  const fileInput = useRef(null)

  function handleUpload() {
    props.setUploading(true)
    const file = fileInput.current.files[0]
    const UPLOAD_URL = '/api/upload'
    const formData = new FormData()
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(UPLOAD_URL, formData, config)
  }

  return (
    <form onChange={handleUpload}>
      <div className={styles.card}>
        <h1>Upload your image</h1>
        <p className={styles.warning}>File should be Jpeg, Png...</p>
        <div className={styles.uploader}>
          <p className={styles.small}>Drag & drop your image here</p>
        </div>
        <p className={styles.small}>Or</p>
        <label htmlFor="file-upload" className={styles.button}>Choose a file</label>
        <input
          id="file-upload"
          type="file"
          className={styles.inputFile}
          accept="image/*"
          ref={fileInput}
        ></input>
      </div>
    </form>
  )
}