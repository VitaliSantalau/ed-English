import style from '../styles/tests.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Tests() {
 
  return (
    <Layout title="Tests">
      <main className={style.main}>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
          <h1>Tests section</h1>
        </div>
      </main>
    </Layout>
  )
}