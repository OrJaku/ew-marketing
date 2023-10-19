import React, { useState } from 'react'
import styles from './BottomContactForm.module.css'
import Modal from 'react-modal';

import { sendFormData } from '../../utils/services.js'
import { AiOutlineClose } from 'react-icons/ai'

const modalCustomStyle = {
    content: {
        position: 'absolute',
        width: '40%',
        height: '60%',
        left: '50%',
        overflow: 'auto',
        transform: 'translate(70%, 15%)',
        backgroundColor: 'rgb(253, 253, 253)',
        border: ' 1px solid rgba(195, 195, 195, 0.55)',
        borderRadius: '10px',
        inset: 'unset'
    }
}

const BottomContactForm = ({ isMobile }) => {
    // Forms
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    const [submitModalOpen, setSubmitModalOpen] = useState(false)
    const [submitResponseState, setSubmitResponseState] = useState(false)

    const phoneNumberFormatter = (inputValue) => {
        const number = inputValue.trim().replace(/[^0-9]/g, "");
        if (number.length < 4) return number;
        if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
        if (number.length < 11) return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
        return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }

    const handlePhoneNumber = (inputValue) => {
        const number = phoneNumberFormatter(inputValue)
        setPhoneNumber(number)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formBody = {
            name: name,
            phone_number: Number(phoneNumber.split("-").join('')),
            message: message
        }
        const resp = await sendFormData("http://130.61.148.113:8898/submit", formBody, setSubmitResponseState)
        try {
            if ("message" in resp) {
                setSubmitResponseState(true)
                setName("")
                setPhoneNumber("")
                setMessage("")
            } else {
                console.log("Incorrect server response", resp)
            }
        } catch {
            console.log("Error Catch: Incorrect server response", resp)
        }
        setSubmitModalOpen(true)
    }

    const handleModalCustomStyle = (isMobile, modalCustomStyle) => {
        if (isMobile){
            modalCustomStyle.content.width = '90%'
            modalCustomStyle.content.height = '60%'
            modalCustomStyle.content.transform = 'translate(5%, 10%)'
        }
        return modalCustomStyle
    }

    return (
        <div>
            <div
                className={styles.container}>
                <div
                    className={`banner-text ${styles.htext}`}>
                    // Porozmawiajmy!
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.text}>
                        <label htmlFor='name'>Imię*</label>
                        <input
                            required
                            id='name'
                            type='text'
                            value={name}
                            maxLength={40}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Gosia' />
                    </div>
                    <div className={styles.text}>
                        <label htmlFor='phone-number'>Telefon*</label>
                        <input
                            required
                            id='phone-number'
                            type='tel'
                            value={phoneNumber}
                            onChange={(e) => handlePhoneNumber(e.target.value)}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            maxLength={11}
                            placeholder='600-300-100' />
                    </div>
                    <div className={styles.text}>
                        <label htmlFor='message'>Wiadomość (opcjonalnie)</label>
                        <textarea
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={750}
                            placeholder='Napisz kilka zdań o twojej firmie, stronie czy reklamach..' />
                    </div>
                    <button
                        type='submit'
                        className={styles.button}
                    >Wyślij
                    </button>
                </form>
            </div>
            <Modal
                style={handleModalCustomStyle(isMobile, modalCustomStyle)}
                ariaHideApp={false}
                isOpen={submitModalOpen}
                onRequestClose={() => setSubmitModalOpen(false)}
            >
                <div style={{ float: 'right' }}>
                    {<AiOutlineClose
                        onClick={() => setSubmitModalOpen(false)}
                        size={25}
                        color={'black'} />}
                </div>
                <div className={styles.modal_content}>
                    <div className={styles.modal_content_title}>
                        {submitResponseState
                            ? "Dziękuję za uzupełnienie formularza"
                            : "Coś poszło nie tak :("}
                    </div>
                    <img
                        style={{
                            margin: '30px 10px'
                        }}
                        width={70}
                        src={`check-${submitResponseState ? "ok" : "failed"}.png`}
                        alt="OK" />
                    <div>
                        {submitResponseState
                            ? "Odezwę się na podane dane kontaktowe, najszybciej jak to będzie możliwe :)"
                            : "Skontaktuj się ze mną telefonicznie lub mailowo (dane kontaktowe są podane w stopce stony)"}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default BottomContactForm