import React from 'react'
import styles from './BottomBanner.module.css'

import bottomBanner from '../../assets/bottomBanner.png'
import bottomImage from '../../assets/bottomImage.svg'

const BottomBanner = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${bottomBanner})` }}
                className={styles.banner}>
                <div
                    className={styles.headertext} >
                </div>
            </div>
            <img
                className={styles.contactimg}
                src={bottomImage} alt="img" />
        </div>
    )
}

export default BottomBanner