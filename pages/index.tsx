import Container from 'components/Container'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <ul>
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
          <li>
            <Link href="/test-drive">
              <a>Тест-драйв</a>
            </Link>
          </li>
          <li>
            <Link href="/catalog">
              <a>Каталог товаров</a>
            </Link>
          </li>
          <li>
            <Link href="/catalog-detailed">
              <a>Каталог товаров. Детальная</a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a>Страница товара</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>О магазине</a>
            </Link>
          </li>
          <li>
            <Link href="/shipping-payment">
              <a>Доставка и оплата</a>
            </Link>
          </li>
          <li>
            <Link href="/stock">
              <a>Акции</a>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default Home
