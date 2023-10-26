import React from 'react'
import styles from './BottomContent.module.css'
import portretImages from '../../assets/portret.svg'


const BottomContent = ({ isMobile, bottomContentRef }) => {
    return (
        <>
            <div
                ref={bottomContentRef}
                className={styles.content}>
                <div className={styles.portretimage}>
                    <img src={portretImages} alt="img" />
                </div>
                <div
                    className={`${styles.htext}`}>
                    <div className={`banner-text`}><span className={'double-slash'}>//</span> O MNIE</div>
                    <div className={`${styles.subtitle}`}>EWELINA ORZEŁ</div>
                    <div className={`${styles.description}`}>
                        <div ><div style={{display: 'inline-block', marginRight: '4px'}}>Zajmuję się marketingiem </div><div style={{display: 'inline-block'}}>internetowym od 8 lat.</div></div>
                        <div>Lubię rozwiązywać realne problemy biznesowe korzystając z nowoczesnych narzędzi i swojego doświadczenia.</div>
                        <div>Siła działań online tkwi w liczbach,  które możemy zbierać, analizować i wykorzystywać do osiągania jeszcze lepszych wyników.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomContent