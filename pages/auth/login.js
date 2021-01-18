
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login to Ed</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Login to Ed-English
        </h1>
        <form>
          <label for="inputEmail">Email adress</label>
          <input type="email" id="inputEmail" placeholder="enter email"></input>
          <label for="inputPassword">Password</label>
          <input type="password" id="inputPassword" placeholder="enter password"></input>
          <button type="submit">login</button>
          <p>Don't have an account? <Link href="/auth/register"><a>Register</a></Link></p>
        </form>
      </main>
    </div>
  )
}