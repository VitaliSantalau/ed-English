import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/register.module.css'
import { useState } from 'react'
import valid from '../../utils/valid'

export default function Register() {
  const initialState = { name: "", email: "", password: "", cf_password: "" }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]:value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) console.log(errMsg)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Register to Ed</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Register to Ed-English
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={handleChangeInput}/>
          <label htmlFor="inputEmail">Email adress</label>
          <input type="email" id="inputEmail" name="email" value={email} onChange={handleChangeInput}/>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" id="inputPassword" name="password" value={password} onChange={handleChangeInput}/>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" name="cf_password" value={cf_password} onChange={handleChangeInput}/>
          <button type="submit">register</button>
          <p>Do you have an account? <Link href="/auth/login"><a>Log in</a></Link></p>
        </form>
      </main>
    </div>
  )
}