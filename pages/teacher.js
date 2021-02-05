import style from '../styles/teacher.module.css'
import Layout from '../components/layout'
import Header from '../components/header'


export default function Teacher() {

  return (
    <Layout title="Teacher">
      <Header />
      <main className={style.main}>
        <div>Hi, I'm Edward</div>
      </main>
    </Layout>
  )
}