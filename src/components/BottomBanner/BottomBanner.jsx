import React from 'react'
import styles from './BottomBanner.module.css'

import bottomBanner from '../../assets/bottomBanner.png'

const BottomBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bottomBanner})` }}
            className={styles.banner}>
            <div 
                className={styles.headertext} >
            </div>
        </div>
    )
}

export default BottomBanner