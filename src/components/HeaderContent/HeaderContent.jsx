import React from 'react'
import styles from './HeaderContent.module.css'
import Card from './Card'

const HeaderContent = ({ headerContentRef, isMobile }) => {
    const cardList = {
        reklamy: {
            image: "reklamy",
            title: "REKLAMY SOCIAL MEDIA",
            subtitle: "Projektowanie i prowadzenie kampanii reklamowych na Facebooku i Instagramie"
        },
        content: {
            image: "content",
            title: "MARKETING",
            subtitle: "Analiza konkurencji, opracowanie strategii komunikacji, tworzenie treści (posty, artykuły, grafiki)"
        },
        kampanie: {
            image: "kampanie",
            title: "KAMPANIE  GOOGLE",
            subtitle: "Tworzenie, optymalizacja, raportowanie"
        },
        strony: {
            image: "strony",
            title: "STRONY WWW",
            subtitle: "Projekt UX/UI, stworzenie i utrzymanie strony"
        },
    }

    return (
        <div
            ref={headerContentRef}
            className={styles.content}>
            <div
                className={`banner-text ${styles.htext}`}>
                <span className={'double-slash'}>//</span> Co robię
            </div>
            <div className={styles.cards}>
                {Object.values(cardList).map((item) => (
                    <Card
                        key={item.image}
                        imageName={item.image}
                        altText={item.image}
                        titleText={item.title}
                        subtitleText={item.subtitle}
                        isMobile={isMobile} />
                ))}
            </div>
        </div>
    )
}

export default HeaderContent