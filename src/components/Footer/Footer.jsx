import React from 'react'
import styles from './Footer.module.css'

import contactInfo from '../../utils/contact.json'

const Footer = () => {
    return (
        <div
            className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <div>Kontakt:</div>
                    <div>
                        <div>Telefon: {contactInfo.telefon}</div>
                        <div>E-mail: {contactInfo.email}</div>
                    </div>
                </div>
                <div className={styles.rodo}>
                    <div>Polityka RODO</div>
                </div>
            </div>
        </div>
    )
}

export default Footer