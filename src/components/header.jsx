import React from 'react'
import imagem from '../img/logo.png'
import styles from '../components/header.module.css'

function header() {
  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <img src={imagem} alt='logo' className={styles.logoImage}></img>
        </div>
        <nav>
            <a href='#sobre' className={styles.about}>Sobre</a>
        </nav>
    </header>
  )
}

export default header