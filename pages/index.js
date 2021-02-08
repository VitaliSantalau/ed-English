import style from '../styles/home.module.css'
import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'
import Header from '../components/header'
import Link from 'next/link'
import Footer from '../components/footer'
import Typing from '../components/typingAnimation'
import Evolution from '../components/evolution'
import PageNav from '../components/pageNav'



export default function Home() {
 
  return (
    <Layout>
      <Header />
      <main className={style.main}>
        <div className={style.containerNavGreetingVideoback}>
          <video className={style.video} loop autoPlay muted>
            <source src='/video.mp4' type="video/mp4"/>
          </video>
          <div className={style.shield}></div>
          <PageNav /> 
          <section className={style.containerGreeting}>
            <div className={style.EdEnglish}>Ed-English</div>
            <div className={style.textEdEnglish}>
              A professional native speaker 
              <Link href="/teacher">
                <a className={style.teacherLink}> teacher </a>
              </Link> 
              from England gives you an EXCELLENT opportunity to improve or start learn English</div>
          </section>
        </div>
        <Typing />
        <section className={style.containerhowItWorks}>
          <div className={style.howItWorks}>How it works</div>
          <div className={style.textHowItWorks}>The teaching concept is based on the natural human desire for evolution. Any kind of learning is evolution. So go ahead ...</div>
          <Evolution />
        </section>
      </main>
      <Footer />
    </Layout>
  )
}

      

export async function getServerSideProps(context) {
  const { db } = await connectToMongodb();
  const users = await db.collection("users").find({}).toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    },
  };
}