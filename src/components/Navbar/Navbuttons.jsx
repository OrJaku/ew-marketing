import React from 'react'
import styles from './Navbar.module.css'

const Navbuttons = ({ mobileMenuOpen, middleBannerRef, bottomBannerRef, headerContentRef }) => {
    return (
        <ul className={mobileMenuOpen ? [styles.menu, styles.show_menu].join(' ') : [styles.menu, styles.hide_menu].join(' ')}>
            <li>
                <a
                    onClick={() => headerContentRef.current.scrollIntoView({
                        behavior: "smooth",
                        inline: "start"
                    })}>
                    Co robię
                </a>
            </li>
            <li>
                <a
                    onClick={() => middleBannerRef.current.scrollIntoView({
                        behavior: "smooth",
                        inline: "start"
                    })}>
                    Potrzeby
                </a>
            </li>
            <li>
                <a
                    onClick={() => bottomBannerRef.current.scrollIntoView({
                        behavior: "smooth",
                        inline: "start"
                    })}>
                    Porozmawiajmy
                </a>
            </li>
            <li>
                <a href='/'>O mnie</a>
            </li>
        </ul>
    )
}

export default Navbuttons