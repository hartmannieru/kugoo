import type { AppProps } from 'next/app'
import Header from 'components/Header'
import GlobalStyle from 'styles/GlobalStyle'
import Theme from 'styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Header />
        <Component {...pageProps} />
        <Theme />
        <GlobalStyle />
    </>
  )
}

export default MyApp
