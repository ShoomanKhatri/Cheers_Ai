import React from 'react'
import styles from "./OverviewCard.module.css"

const OverviewCard = () => {
  return (
    <div className={styles.overviewContainer}>
        <div className={styles.imgContainer}>
            <img src="https://images.pexels.com/photos/8728562/pexels-photo-8728562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="document img" className={styles.image} />
        </div>
        <h1 className={styles.title}>Conversation Chat</h1>
        <p className={styles.description}>
        A conversation chatbot trained on clinically validated literature and real therapy-patient conversation transcripts -offering realistic and science-backed therapeutic responses.
        </p>
    </div>
  )
}

export default OverviewCard