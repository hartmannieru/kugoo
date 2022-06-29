import { createGlobalStyle } from "styled-components"
import { rem } from 'polished'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-size: 16px;
    font-family: 'Jost', sans-serif;
    color: #282739;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    font-family: 'Jost', sans-serif;
    text-decoration: none;
    color: #282739;
  }
  button {
    border: none;
    outline: none;
    background: none;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: ${rem(40)};
    height: ${rem(40)};
    background: #ffffff;
    border-radius: 50%;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: '';
    width: ${rem(7)};
    height: ${rem(12)};
    background: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.53033 5.46967C6.82322 5.76256 6.82322 6.23744 6.53033 6.53033L1.75736 11.3033C1.46447 11.5962 0.989593 11.5962 0.6967 11.3033C0.403806 11.0104 0.403806 10.5355 0.6967 10.2426L4.93934 6L0.696699 1.75736C0.403805 1.46447 0.403805 0.989593 0.696699 0.6967C0.989592 0.403806 1.46447 0.403806 1.75736 0.696699L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z' fill='%236F73EE'/%3E%3C/svg%3E%0A") no-repeat center center;
  }

  .swiper-button-prev::after {
    transform: rotate(180deg);
  }
`
export default GlobalStyle