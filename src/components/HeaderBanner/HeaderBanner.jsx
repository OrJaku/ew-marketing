import React from 'react'
import styles from './HeaderBanner.module.css'

import headerBanner from '../../assets/headerBanner.png'

const HeaderBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${headerBanner})`}}
            className={styles.banner}>
            <div 
                className={`banner-text ${styles.htext}`}>
                <div>
                    Nie masz czasu na promowanie biznesu?
                </div>
                <div>
                    Zróbmy to razem!
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner