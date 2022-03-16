import type { AppProps } from 'next/app'
import Header from 'components/Header'
import GlobalStyle from 'styles/GlobalStyle'
import Theme from 'styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </Theme>
    </>
  )
}

export default MyApp
