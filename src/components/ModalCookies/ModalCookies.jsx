import React, { useEffect } from 'react'
import Modal from 'react-modal';
import styles from './ModalCookies.module.css'

const modalCustomStyle = {
    content: {
        position: 'absolute',
        width: '90%',
        height: '25%',
        left: '50%',
        overflow: 'auto',
        transform: 'translate(5%, 290%)',
        backgroundColor: 'rgb(253, 253, 253)',
        border: ' 1px solid rgba(195, 195, 195, 0.55)',
        borderRadius: '10px',
        inset: 'unset',
        fontSize: '13px'
    }
}

const ModalCookies = ({ isMobile, modalCookiesIsOpen, setModalCookiesIsOpen }) => {

    useEffect(() => {
        const starageState = localStorage.getItem('cookies_policy');
        const isAccepted = JSON.parse(starageState);
        if ((isAccepted !== null) && (isAccepted !== undefined) && (isAccepted)) {
            setModalCookiesIsOpen(false)
        }
        else{
            setModalCookiesIsOpen(true)
        }
    }, [])
    

    const handeSubmitCookies = () => {
        setModalCookiesIsOpen(false)
        localStorage.setItem('cookies_policy', JSON.stringify(true));
    }

    const handleModalCustomStyle = (isMobile, modalCustomStyle) => {
        if (isMobile) {
            modalCustomStyle.content.height = '46%'
            modalCustomStyle.content.transform = 'translate(5%, 110%)'
            modalCustomStyle.content.fontSize = '11px'
        }
        return modalCustomStyle
    }

    return (
        <Modal
            style={handleModalCustomStyle(isMobile, modalCustomStyle)}
            ariaHideApp={false}
            isOpen={modalCookiesIsOpen}
        >
            <div className={styles.modal_content}>
                <div>Ta strona wykorzystuje pliki cookie. Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Mogą też korzystać z nich współpracujące z nami firmy badawcze oraz reklamowe.</div>
                <div>Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij w przycisk "Akceptuję".</div>
                <div>Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</div>
                <button
                    onClick={handeSubmitCookies}
                    className={styles.button}>
                    Akceptuję
                </button>
            </div>
        </Modal>
    )
}
export default ModalCookies