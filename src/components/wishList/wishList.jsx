import React from 'react'
import styles from './wishList.module.css'
const WishList = () => {
    return (
        <div className={styles.bottomCard}>
            <h4>Be a part of the Project! Pre-register now and secure your spot for Dyleum token at earlybird prices during presale and other rewards!</h4>
            <button className={styles.joinBtn}>Pre-register</button>
        </div>
    )
}

export default WishList