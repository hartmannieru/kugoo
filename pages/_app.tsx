import type { AppProps } from 'next/app'
import Header from 'components/Header'
import GlobalStyle from 'styles/GlobalStyle'
import Theme from 'styles/Theme'
import styled from 'styled-components'
import Footer from 'components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <App>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
          <Footer />
        </App>
      </Theme>
    </>
  )
}

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default MyApp
