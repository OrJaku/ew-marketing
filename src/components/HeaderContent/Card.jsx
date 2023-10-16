import React from 'react'
import styles from './Card.module.css'

const Card = ({imageName, titleText, subtitleText, altText}) => {

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`card-${imageName}.png`} alt={altText} />
            </div>
            <div>
                <div className={styles.title}>
                    {titleText}
                </div>
                <div className={styles.subtitle}>
                    {subtitleText}
                </div>
            </div>
        </div>
    )
}

export default Card