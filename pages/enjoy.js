import style from '../styles/enjoy.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Enjoy() {

  return (
    <Layout title="Enjoy">
      <main className={style.main}>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
          <h1>Enjoy section</h1>
        </div>
      </main>
    </Layout>
  )
}