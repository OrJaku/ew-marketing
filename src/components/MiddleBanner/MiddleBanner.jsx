import React, { useState } from 'react'
import styles from './MiddleBanner.module.css'
import Quiz from './Quiz'

import middleBanner from '../../assets/middleBanner.png'
import imagePeople from '../../assets/middleImage.svg'

const MiddleBanner = ({ middleBannerRef }) => {
    const [quizIsOpen, setQuizIsOpen] = useState(true)
    return (
        <div className={styles.container}>
            <div

                ref={middleBannerRef}
                style={{ backgroundImage: `url(${middleBanner})` }}
                className={styles.banner}>
                <div
                    className={`banner-text ${styles.htext}`}>
                    <div>
                    // SPRAWDŹ, CZEGO POTRZEBUJE TWÓJ BIZNES
                    </div>
                    <div className={styles.description}>
                        <div className={styles.ltext}>
                            Odpowiedz na kilka pytań i otrzymaj darmową poradę
                        </div>
                        <button
                            onClick={() => setQuizIsOpen(!quizIsOpen)}
                            type='button'
                            className={styles.button}
                            >{quizIsOpen? "Zamknij": "Zaczynamy!"}
                        </button>
                    </div>
                </div>

            </div>
            {/* <img
                className={styles.peopleimg}
                src={imagePeople} alt="img" /> */}
            <div className={quizIsOpen? [styles.quiz_container ,styles.qc_active].join(' '): styles.quiz_container}>
                <Quiz />
            </div>
        </div>
    )
}

export default MiddleBanner