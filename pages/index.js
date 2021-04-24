import { useRef } from 'react'
import axios, { post } from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const fileInput = useRef(null)

  function handleUpload() {
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.homepage}>
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
      </main>

    </div>
  )
}
