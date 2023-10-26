import React, { useState } from 'react'
import styles from './MiddleBanner.module.css'
import Quiz from './Quiz'

import middleBanner from '../../assets/middleBanner.png'
import imagePeople from '../../assets/middleImage.svg'

const MiddleBanner = ({ isMobile, middleBannerRef }) => {
    const [quizIsOpen, setQuizIsOpen] = useState(false)
    const [quizModalOpen, setQuizModalOpen] = useState(false)
    const [selectedIds, setSelectedIds] = useState([])

    return (
        <div className={styles.container}>
            <div

                ref={middleBannerRef}
                style={{ backgroundImage: `url(${middleBanner})` }}
                className={styles.banner}>
                <div
                    className={`banner-text ${styles.htext} ${styles.text_container}`}>
                    <div>
                    <span className={'double-slash'}>//</span> SPRAWDŹ, CZEGO POTRZEBUJE TWÓJ BIZNES
                    </div>
                    <div className={styles.description}>
                        <div className={styles.ltext}>
                            Odpowiedz na kilka pytań i otrzymaj darmową poradę
                        </div>
                        <button
                            onClick={() => setQuizIsOpen(!quizIsOpen)}
                            type='button'
                            className={styles.button}
                        >{quizIsOpen ? "Zamknij" : "Zaczynamy!"}
                        </button>
                    </div>
                </div>
            </div>
            <img
                className={styles.peopleimg}
                src={imagePeople} alt="img" />
            <div className={quizIsOpen ? [styles.quiz_container, styles.qc_active].join(' ') : styles.quiz_container}>
                <Quiz
                    isMobile={isMobile}
                    selectedIds={selectedIds}
                    setSelectedIds={setSelectedIds}
                    quizIsOpen={quizIsOpen}
                    quizModalOpen={quizModalOpen} 
                    setQuizModalOpen={setQuizModalOpen}/>
                {quizIsOpen && selectedIds.length > 0
                    ? <button
                        onClick={() => setQuizModalOpen(!quizModalOpen)}
                        className={styles.quiz_button}
                        type='button'>
                        {`Porada  (${selectedIds.length})`}
                    </button>
                    : ""}
            </div>
        </div>
    )
}

export default MiddleBanner