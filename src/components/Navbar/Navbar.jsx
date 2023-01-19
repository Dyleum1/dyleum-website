import React from 'react'
import styles from './navbar.module.css'
import logo from '../../assets/images/dyleumLogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <img src={logo} alt="" className={styles.img} />
            <div className={styles.linksContainer}>
                <Link to="/">Home</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
                <Link to="/team">Our Team</Link>
                <Link to="">FAQ</Link>
            </div>
            <button className={styles.lunchBtn}>Launch App</button>
        </div>
    )
}

export default Navbar