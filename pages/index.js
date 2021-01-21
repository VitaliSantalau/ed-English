import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home({ isConnected }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn English with Ed</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ed-English
        </h1>
      </main>
      
    </div>
  )
}

