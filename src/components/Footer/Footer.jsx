import React, { useState } from 'react'
import styles from './Footer.module.css'
import Modal from 'react-modal';

import contactInfo from '../../utils/contact.json'
import RODO from './Rodo';
import { AiOutlineClose } from 'react-icons/ai'


const modalCustomStyle = {
    content: {
        position: 'absolute',
        width: '50%',
        height: '80%',
        left: '50%',
        overflow: 'auto',
        transform: 'translate(45%, 5%)',
        backgroundColor: 'rgb(253, 253, 253)',
        border: ' 1px solid rgba(195, 195, 195, 0.55)',
        borderRadius: '10px',
        inset: 'unset'
    }
}

const Footer = ({ isMobile }) => {

    const [submitModalOpen, setSubmitModalOpen] = useState(false)


    const handleModalCustomStyle = (isMobile, modalCustomStyle) => {
        if (isMobile) {
            modalCustomStyle.content.width = '90%'
            modalCustomStyle.content.height = '60%'
            modalCustomStyle.content.transform = 'translate(5%, 10%)'
        }
        return modalCustomStyle
    }

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
                    <div>Polityka Prywatności</div>
                    <div
                        onClick={() => setSubmitModalOpen(!submitModalOpen)}
                        className={styles.rodo_btn}
                        >RODO</div>
                </div>
            </div>
            <Modal
                style={handleModalCustomStyle(isMobile, modalCustomStyle)}
                ariaHideApp={false}
                isOpen={submitModalOpen}
                onRequestClose={() => setSubmitModalOpen(false)}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {<AiOutlineClose
                        onClick={() => setSubmitModalOpen(false)}
                        size={25}
                        cursor={'pointer'}
                        color={'black'} />}
                </div>
                <div className={styles.modal_content}>
                    <RODO/>
                </div>
            </Modal>
        </div>
    )
}

export default Footer