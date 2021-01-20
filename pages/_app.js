import '../styles/globals.css'
import Layout from '../components/layout'
import { DataProvider } from '../store/globalState'


function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  )
}

export default App