import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
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
      {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
