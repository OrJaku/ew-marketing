import React from 'react'
import styles from './MiddleContent.module.css'


const MiddleBanner = () => {
    return (
        <div
            className={styles.content}>
            <div
                className={`banner-text ${styles.htext}`}>
                <span className={'double-slash'}>//</span> Znajdźmy Twoich klientów!
            </div>
        </div>
    )
}

export default MiddleBanner