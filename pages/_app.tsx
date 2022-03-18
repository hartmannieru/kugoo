import type { AppProps } from 'next/app'
import Header from 'components/Header'
import GlobalStyle from 'styles/GlobalStyle'
import Theme from 'styles/Theme'
import styled from 'styled-components'
import Footer from 'components/Footer/Footer'
import { rem } from 'polished'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <App>
          <Header />
          <Main>
            <Component {...pageProps} />
            <GlobalStyle />
          </Main>
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
  min-width: max-content;
`
 
const Main = styled.main`
  padding-bottom: ${rem(100)};
`

export default MyApp
