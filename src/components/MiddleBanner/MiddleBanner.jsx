import React from 'react'
import styles from './MiddleBanner.module.css'

import middleBanner from '../../assets/middleBanner.png'
import imagePeople from '../../assets/middleImage.svg'

const MiddleBanner = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${middleBanner})` }}
                className={styles.banner}>
                <div
                    className={`banner-text ${styles.htext}`}>
                // SPRAWDŹ, CZEGO POTRZEBUJE TWÓJ BIZNES
                </div>

            </div>
            <img
                className={styles.peopleimg}
                src={imagePeople} alt="img" />
        </>
    )
}

export default MiddleBanner