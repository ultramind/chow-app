import Layout from '../components/Layout/Layout'
import StoreProvider from '../context/StoreProvider'

function MyApp ({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
