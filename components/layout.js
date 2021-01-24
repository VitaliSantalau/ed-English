import Head from 'next/head'
import Footer from './footer'
import Header from './header'

export default function Layout({ children, title }) {
  
  return (
    <>
      <Head>
        {title ? <title>{title} | Ed-English</title> : <title>Ed-English</title> }
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}