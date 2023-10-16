import React from 'react'
import styles from './HeaderContent.module.css'
import Card from './Card'

const HeaderContent = ({ headerContentRef }) => {
    const cardList = {
        reklamy: {
            image: "reklamy",
            title: "REKLAMY SOCIAL MEDIA",
            subtitle: "Projektowanie i prowadzenie kampanii reklamowych na Facebooku i Instagramie"
        },
        content: {
            image: "content",
            title: "CONTENT MARKETING",
            subtitle: "Tworzenie grafik, pisanie postów, opracowanie strategii komunikacji"
        },
        strony: {
            image: "strony",
            title: "STRONY WWW",
            subtitle: "Projekt UX/UI, stworzenie i utrzymanie strony"
        },
        kampanie: {
            image: "kampanie",
            title: "KAMPANIE  GOOGLE",
            subtitle: "Tworzenie, optymalizacja, raportowanie"
        },
    }

    return (
        <div
            ref={headerContentRef}
            className={styles.content}>
            <div
                className={`banner-text ${styles.htext}`}>
                // Co robię
            </div>
            <div className={styles.cards}>
                {Object.values(cardList).map((item) => (
                    <Card
                        key={item.image}
                        imageName={item.image}
                        altText={item.image}
                        titleText={item.title}
                        subtitleText={item.subtitle} />
                ))}
            </div>
        </div>
    )
}

export default HeaderContent