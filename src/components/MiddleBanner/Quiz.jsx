import React from 'react'

import styles from './Quiz.module.css'


const Quiz = () => {
    return (
        <div className={styles.questions}>
            <div>Nie mam reklam, bo nie wiem jak je ustawić</div>
            <div>Korzystałem z reklam w internecie, ale są zbyt drogie</div>
            <div>Moje reklamy nie działają</div>
            <div>Nikt nie wchodzi na moją stronę</div>
            <div>Chciałabym mieć swoją stronę www, ale nie wiem jak ją zrobić</div>
            <div>Mam stronę www, ale nie jestem z niej zadowolona/y</div>
            <div>Nie mam pomysłu na promocję w internecie</div>
            <div>Moje posty w social mediach są nieskuteczne</div>
            <div>Nie wiem, jakie treści zainteresowałyby moich klientów</div>
        </div>
    )
}

export default Quiz