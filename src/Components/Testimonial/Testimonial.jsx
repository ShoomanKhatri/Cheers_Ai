import React from 'react'
import styles from "./Testimonial.module.css"

const Testimonial = ({item}) => {
  return (
    <div className={styles.Container}>
        <p className={styles.name}>{item?.name} </p>
        <p className={styles.review}>
{item?.review}
        </p>
    </div>
  )
}

export default Testimonial