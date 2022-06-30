import Article from 'components/Article';
import Articles from 'components/Articles';
import Container from 'components/Container';
import React from 'react';

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <Container>
      <Articles>
        {/* TODO: Брать из json */}
        <Article
          img={'/images/pages/blog/blog-1.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-2.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-5.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-6.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-5.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-6.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-1.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-4.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
        <Article
          img={'/images/pages/blog/blog-2.png'}
          title={'Как правильно заряжать электросамокат'}
          description={'Один из первых вопросов, который волнует после покупки электросамоката.'}
          date={'01.09.2021'}
          views={53}
        />
      </Articles>
    </Container>
  );
};

export default BlogPage;
