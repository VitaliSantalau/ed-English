import style from '../styles/proud.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Proud() {
 
  return (
    <Layout title="Proud">
      <main className={style.main}>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
          <h1>Proud section</h1>
        </div>
      </main>
    </Layout>
  )
}