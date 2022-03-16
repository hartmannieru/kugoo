import Container from 'components/Container'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <Link href="/">
              <a>Навигация</a>
            </Link>
          </li>
          <li>
            <Link href="/components">
              <a>Компоненты</a>
            </Link>
          </li>
          <li>
            <Link href="/main">
              <a>Главная</a>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <a>Сервис</a>
            </Link>
          </li>
          <li>
            <Link href="/cooperation">
              <a>Сотрудничество</a>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default Home
