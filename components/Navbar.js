// import React from 'react'
import styles from '../styles/navbar.module.css'

function Navbar() {
    return (
            <div className={styles.navbar}>
                <div>
                    <div id={styles.logoArea}>
                        <div className={styles.logo}>
                            Logo
                        </div>
                        <p>BUSINESS NAME</p>
                    </div>
                    <ul className={styles.ul}>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:amoswings7@gmail.com">
                            email us
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:0814599837">call us today</a>
                        </li>
                    </ul>
                    <div id="burger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            <nav className={styles.navigation}>
                <ul>
                    <li tabIndex='1'>
                        <p>Men's Health</p>
                        <ul className={styles.subMenu}>
                            <li><a href="#">2000</a></li>
                            <li><a href="#">3000</a></li>
                            <li><a href="#">4000</a></li>
                        </ul>
                    </li>
                    <li tabIndex='2'>
                        <p>Women's Health</p>
                        <ul className={styles.subMenu}>
                            <li><a href="#">2000</a></li>
                            <li><a href="#">3000</a></li>
                            <li><a href="#">4000</a></li>
                        </ul>
                    </li>
                    <li tabIndex='3'>
                        <p>Common Treatments</p>
                        <ul className={styles.subMenu}>
                            <li><a href="#">2000</a></li>
                            <li><a href="#">3000</a></li>
                            <li><a href="#">4000</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            </div>
    )
}

export default Navbar
