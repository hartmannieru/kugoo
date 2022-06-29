import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from './Container'
import ButtonDefault from './Buttons/ButtonDefault'

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <SubscribeStyled>
      <Container>
        <SubscribeBox>
          <SubscribeText>
            Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
          </SubscribeText>
          <SubscribeFormBox>
            <SubscribeFormInput placeholder='Введите Ваш email' />
            <ButtonDefault width='auto' background='#fff' color='#6F73EE'>Подписаться</ButtonDefault>
          </SubscribeFormBox>
        </SubscribeBox>
      </Container>
    </SubscribeStyled>
  )
}

const SubscribeFormInput = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${rem(5)};
  border: none;
  outline: none;
  padding: ${rem(15)} ${rem(25)};
  color: ${props => props.theme.colors.white};
  &::placeholder {
    color: ${props => props.theme.colors.white};
  }
`

const SubscribeFormBox = styled.form`
  display: grid;
  gap: ${rem(20)};
  grid-template-columns: ${rem(410)} 1fr;
`

const SubscribeText = styled.div`
  font-weight: 600;
  max-width: ${rem(445)};
  width: 100%;
  font-size: ${rem(18)};
  line-height: ${rem(26)};
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`

const SubscribeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SubscribeStyled = styled.div`
  margin-top: auto;
  padding: ${rem(22)} 0;
  background: ${props => props.theme.colors.primary};
`

export default Subscribe