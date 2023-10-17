import React from 'react'
import styles from './Card.module.css'
import { baseDimensions } from '../../utils/settings.js'


const Card = ({ imageName, titleText, subtitleText, altText, isMobile }) => {

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img width={isMobile ? baseDimensions.mobileImgSize : baseDimensions.primaryImgSize}
                    height={isMobile ? baseDimensions.mobileImgSize : baseDimensions.primaryImgSize}
                    src={`card-${imageName}.png`}
                    alt={altText} />
            </div>
            <div>
                <div
                    style={isMobile ? {fontSize: 14} : {fontSize: 16}}
                    className={styles.title}>
                    {titleText}
                </div>
                <div 
                    style={isMobile ? {fontSize: 12} : {fontSize: 14}}
                    className={styles.subtitle}>
                    {subtitleText}
                </div>
            </div>
        </div>
    )
}

export default Card