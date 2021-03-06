import style from '../styles/teacher.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Teacher() {
 
  return (
    <Layout title="Teacher">
      <main className={style.main}>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
          <h1>About teacher page</h1>
        </div>
      </main>
    </Layout>
  )
}