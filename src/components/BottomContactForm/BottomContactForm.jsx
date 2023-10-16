import React from 'react'
import styles from './BottomContactForm.module.css'


const BottomContactForm = ({ }) => {
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
                        <label htmlFor='name'>Imię i nazwisko*</label>
                        <input id='name' type='text' placeholder='Jan Kowlaski' />
                    </div>
                    <div className={styles.text}>
                        <label htmlFor='phone-number'>Telefon*</label>
                        <input id='phone-number' type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='600 300 100' />
                    </div>
                    <div className={styles.text}>
                        <label htmlFor='message'>Wiadomość (opcjonalnie)</label>
                        <textarea id='message' placeholder='Napisz kilka zdań o twojej firmie, stronie czy reklamach..' />
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