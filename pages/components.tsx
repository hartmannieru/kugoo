import Container from 'components/Container';
import styled from 'styled-components';
import { rem } from 'polished';
import H2 from 'components/Titles/H2';
import ButtonDefault from 'components/Buttons/ButtonDefault';
import Card from 'components/Card';
import Label from 'components/Label';
import items from './api/accordion-db';
import Accordion from 'components/Accordion';
import LinkDefault from 'components/LinkDefault';
import Article from 'components/Article';
import Breadcrumbs from 'components/Breadcrumbs';

type Props = {};

const ComponentsPages = (props: Props) => {
  return (
    <ComponentsPagesStyled>
      <Container>
        <ComponentsPagesTitle>Хлебные крошки</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Breadcrumbs />
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Этикетки</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Label>Рассрочка</Label>
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Ссылки</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <LinkDefault text={'LinkDefault'} />
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Заголовки</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <H2>h2</H2>
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Кнопки</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <ButtonDefault>ButtonDefault</ButtonDefault>
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Карточки</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Card labelText="Хит" labelColor="green" />
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Статья</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Article
            img={'/images/pages/blog/blog-1.png'}
            title={'Как правильно заряжать электросамокат'}
            description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
            date={'01.09.2021'}
            views={53}
          />
        </ComponentsPagesBox>
        <ComponentsPagesTitle>Аккордеон</ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Accordion items={items} />
        </ComponentsPagesBox>
      </Container>
    </ComponentsPagesStyled>
  );
};

const ComponentsPagesBox = styled.div`
  margin-bottom: ${rem(60)};
`;

const ComponentsPagesTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${rem(20)};
`;

const ComponentsPagesStyled = styled.section``;

export default ComponentsPages;
