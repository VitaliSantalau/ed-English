import style from '../styles/blog.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Blog() {
 
  return (
    <Layout title="Blog">
      <main className={style.main}>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.home}>Home</a>
          </Link>
          <h1>Blog section</h1>
        </div>
      </main>
    </Layout>
  )
}