import '../styles/globals.css'
import { DataProvider } from '../store/globalState'

function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default App