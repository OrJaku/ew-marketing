import React, { useEffect, useRef, useState } from 'react'
import styles from './Card.module.css'



const Card = ({ imageName, titleText, subtitleText, altText }) => {
    const primaryImgSize = 255
    const mobileImgSize = 220
    const mobilPageWidthPx = 740

    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobilPageWidthPx ? true : false)

    useEffect(() => {
        function handleWindowResize() {
            if (window.innerWidth <= mobilPageWidthPx) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img width={isMobile ? mobileImgSize : primaryImgSize}
                    height={isMobile ? mobileImgSize : primaryImgSize}
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