import Image from 'next/image'
import styles from '../styles/Uploaded.module.css'

export default function Uploaded(props) {
  return (
    <div className={styles.card}>
      <span className="material-icons md-35 green600">check_circle</span>
      <p>Uploaded Successfully!</p>
      <div className={styles.preview}>
        {props.imageURL && <Image src={props.imageURL} layout="fill" />}
      </div>
      <div className={styles.link}>
        <div className={styles.input}>
          <span>{props.imageURL && `https://localhost:3000${props.imageURL}`}</span>
          <button className={styles.copy}>Copy Link</button>
        </div>
      </div>
    </div>
  )
}