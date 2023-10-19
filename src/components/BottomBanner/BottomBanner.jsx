import React from 'react'
import styles from './BottomBanner.module.css'
import BottomContactForm from '../BottomContactForm/BottomContactForm'
import bottomBanner from '../../assets/bottomBanner.png'
import bottomImage from '../../assets/bottomImage.svg'

const BottomBanner = ({ isMobile, bottomBannerRef }) => {
    return (
        <div>

            <img
                className={styles.contactimg}
                src={bottomImage} alt="img" />
            <div
                ref={bottomBannerRef}
                style={{ backgroundImage: `url(${bottomBanner})` }}
                className={styles.banner}>
                <div
                    className={styles.headertext} >
                    <div>
                        <BottomContactForm
                            isMobile={isMobile} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBanner