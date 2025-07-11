import React from 'react'
import styles from '../components/login.module.css'

function login() {
  return (
    <main className={styles.loginContainer}> 
      <h1 className={styles.acess}>Acesso</h1>
      <form className={styles.loginForm}> 
        <label htmlFor='email'><strong>Email</strong></label>
        <input type='email' id='email' placeholder='Digite Email'/>
        <label htmlFor='password'><strong>Senha</strong></label>
        <input type='password' id='password' placeholder='Digite senha'/>

        <div className={styles.buttonsLogin}>
          <button type='submit' className={styles.entryBt}>ENTRAR</button>
          <button type='button' className={styles.registerBt}>Cadastrar</button>
          <button type='button' className={styles.passwordBt}>Redefinir senha</button>
        </div>
      </form>

    <div className={styles.aboutLab}>
      <details className={styles.dropDown}>
        <summary className={styles.dropdownSummary}>Lorem Ipsum Dolor Sit Amet</summary>
        <p className={styles.dropdownContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta incidunt quidem sunt, quibusdam dolore voluptatum vel ducimus facere, laudantium, perferendis nihil eos voluptas vero libero aut adipisci modi? Tenetur, earum!
        </p>
      </details>
    </div>
    </main>
  )
}

export default login