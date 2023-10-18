import React, { useState } from 'react'
import styles from './BottomContactForm.module.css'



const BottomContactForm = ({ }) => {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [message, setMessage] = useState("")

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

    return (
        <div>
            <div
                className={styles.container}>
                <div
                    className={`banner-text ${styles.htext}`}>
                    // Porozmawiajmy!
                </div>
                <form>
                    <div className={styles.text}>
                        <label htmlFor='name'>Imię*</label>
                        <input
                            id='name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Gosia' />
                    </div>
                    <div className={styles.text}>
                        <label htmlFor='phone-number'>Telefon*</label>
                        <input
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
                            placeholder='Napisz kilka zdań o twojej firmie, stronie czy reklamach..' />
                    </div>
                    <button
                        type='submit'
                        className={styles.button}
                    >Wyślij
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BottomContactForm