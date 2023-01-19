import React from 'react'
import Frame from '../../assets/images/Frame.png'
import FrameMobile from '../../assets/images/tekhomeMobile.png'
import styles from './ Tokenomics.module.css'
const Tokenomics = () => {
    return (
        <>
            <img src={Frame} alt="" className={styles.tokenomicsBg} />
            <img src={FrameMobile} alt="" className={styles.tokenomicsBgMobile} />
        </>

    )
}

export default Tokenomics