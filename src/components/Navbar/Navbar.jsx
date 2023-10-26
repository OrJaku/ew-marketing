import React, { useState } from 'react'
import styles from './Navbar.module.css'

import Navbuttons from './Navbuttons'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../assets/logo.svg'

const Navbar = ({
    isMobile,
    middleBannerRef,
    bottomBannerRef,
    headerContentRef,
    bottomContentRef
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className={
            isMobile
                ? mobileMenuOpen
                    ? [styles.navbar, styles.navbar_active].join(' ')
                    : styles.navbar
                : styles.navbar}>

            {isMobile
                ? <>
                    <div className={styles.upper_bar}>
                        <img className={styles.logo} src={Logo} alt="EO" />
                        <div className={styles.menu_btn}>
                            {mobileMenuOpen
                                ? <AiOutlineClose
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    size={25}
                                    cursor={'pointer'} />
                                : <AiOutlineMenu
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    size={25}
                                    cursor={'pointer'} />
                            }
                        </div>
                    </div>
                    <nav className={mobileMenuOpen ? [styles.menu, styles.menu_active].join(' ') : [styles.menu, styles.menu_inactive].join(' ')}>
                        <Navbuttons
                            mobileMenuOpen={mobileMenuOpen}
                            middleBannerRef={middleBannerRef}
                            bottomBannerRef={bottomBannerRef}
                            headerContentRef={headerContentRef} />
                    </nav>
                </>
                :
                <>
                    <img className={styles.logo} src={Logo} alt="EO" />
                    <nav className={styles.menu}>
                        <Navbuttons
                            mobileMenuOpen={mobileMenuOpen}
                            middleBannerRef={middleBannerRef}
                            bottomBannerRef={bottomBannerRef}
                            headerContentRef={headerContentRef}
                            bottomContentRef={bottomContentRef} />
                    </nav>
                </>
            }

        </header>
    )
}

export default Navbar