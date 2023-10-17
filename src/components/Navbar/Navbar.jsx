import React from 'react'
import styles from './Navbar.module.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/logo.svg'

const Navbar = ({ middleBannerRef, bottomBannerRef, headerContentRef }) => {
    return (
        <header className={styles.navbar}>
            <img src={Logo} alt="EO" />
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <a href='/'>Start</a>
                    </li>
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
                <div className={styles.menu}>
                    <AiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar