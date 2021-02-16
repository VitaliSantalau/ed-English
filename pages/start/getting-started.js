import style from '../../styles/start.module.css'
import Layout from '../../components/layout'
import Header from '../../components/header'
import PageNav from '../../components/pageNav'
import StartNav from '../../components/startNav'
import Image from 'next/image'
import Footer from '../../components/footer'


export default function GettingStarted() {

    return (
        <Layout title="Start / Getting started">
          <Header />
          <main className={style.main}>
           
            <PageNav />
           
            
            <div className={style.wrapper}>
              <StartNav />
              <section>
                <h1>Getting started</h1>
                <div className={style.containerImage}>
                  <Image 
                    src="/chelovek-drevnego-mira-start.png"
                    alt="Picture of the author"
                    layout="responsive"
                    width={120}
                    height={90}
                  />
                </div>
              
              </section>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

