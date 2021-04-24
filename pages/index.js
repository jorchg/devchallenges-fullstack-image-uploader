import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.homepage}>
        <div className={styles.card}>
          <h1>Upload your image</h1>
          <p className={styles.warning}>File should be Jpeg, Png...</p>
          <div className={styles.uploader}>
            <p className={styles.small}>Drag & drop your image here</p>
          </div>
          <p className={styles.small}>Or</p>
          <button className={styles.button}>Choose a file</button>
        </div>
      </main>

    </div>
  )
}
