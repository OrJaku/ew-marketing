import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/logo.svg'

const Navbar = ({ isMobile, middleBannerRef, bottomBannerRef, headerContentRef }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={styles.navbar}>
            <div className={styles.upper_bar}>
                <img className={styles.logo} src={Logo} alt="EO" />
                {isMobile
                    ? !mobileMenuOpen
                        ? <div className={styles.menu_btn}>
                            <AiOutlineMenu
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                size={25}
                                cursor={'pointer'} />
                        </div>
                        : <div className={styles.menu_btn}>
                            <AiOutlineClose
                                onClick={() => setMobileMenuOpen(false)}
                                size={25}
                                cursor={'pointer'} />
                        </div>
                    : ""}
            </div>
            {!isMobile || isMobile && mobileMenuOpen
                ? <nav>
                    <ul className={styles.menu}>
                        <li>
                            <a
                                onClick={() => headerContentRef.current.scrollIntoView({
                                    behavior: "smooth",
                                    inline: "start"
                                })}>
                                Co robie
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
                </nav>
                : ""}
        </header>
    )
}

export default Navbar