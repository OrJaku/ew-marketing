import React from 'react'
import styles from './Navbar.module.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <img src={Logo} alt="EO" />
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <a href='/'>Start</a>
                    </li>
                    <li>
                        <a href='/'>Potrzeby</a>
                    </li>
                    <li>
                        <a href='/'>Porozmawiajmy</a>
                    </li>
                    <li>
                        <a href='/'>O mnie</a>
                    </li>
                    {/* <AiOutlineMenu /> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar