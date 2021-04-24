import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Uploader from '../components/Uploader';
import Loader from '../components/Loader';

export default function Home() {
  const [uploading, setUploading] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.homepage}>
        {uploading ? 
          <Loader /> :
          <Uploader setUploading={setUploading} />
        }
      </main>
    </div>
  )
}
