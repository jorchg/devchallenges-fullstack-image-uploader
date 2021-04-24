import styles from '../styles/Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.card}>
      <p>Uploading...</p>
      <div className={styles.meter}>
        <span>
          <span className={styles.progress}></span>
        </span>
      </div>
    </div>
  )
}