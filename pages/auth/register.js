import Head from 'next/head'
import styles from '../../styles/register.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register to Ed</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Register to Ed
        </h1>
      </main>
    </div>
  )
}