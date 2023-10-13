import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <div
            className={styles.footer}>
            <div className={styles.content}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.contact}>
                    <div>Kontakt:</div>
                    <div>
                        <div>tel: 500-100-100</div>
                        <div>email: ewelka@gmail.com</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer