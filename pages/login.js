import style from '../styles/login.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Login() {
 
  return (
    <Layout title="Log In">
      <main className={style.main}>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
          <h1>Login page</h1>
        </div>
      </main>
    </Layout>
  )
}