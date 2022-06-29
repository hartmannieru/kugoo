import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  img: string;
  title?: string;
  description?: string;
  date?: string;
  views?: number;
};

const Article = ({ img, title, description, date, views }: Props) => {
  return (
    <Link href={'/blog-detailed'}>
      <ArticleBox>
        <ArticleImgBox>
          <ArticleImg>
            <Image src={img} alt={title} width={350} height={234} layout="responsive" />
          </ArticleImg>
        </ArticleImgBox>
        <ArticleContent>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
          <ArticleInfo>
            <ArticleDate>
              <ArticleDateIcon></ArticleDateIcon>
              <ArticleDateValue>{date}</ArticleDateValue>
            </ArticleDate>
            <ArticleView>
              <ArticleViewIcon></ArticleViewIcon>
              <ArticleViewValue>{views}</ArticleViewValue>
            </ArticleView>
          </ArticleInfo>
        </ArticleContent>
      </ArticleBox>
    </Link>
  );
};

const ArticleBox = styled.article`
  max-width: ${rem(350)};
  min-height: ${rem(367)};
  width: 100%;
  border-radius: ${(props) => rem(props.theme.radius.blog)};
  overflow: hidden;
`;

const ArticleImgBox = styled.div`
  position: relative;
  width: 100%;
  height: ${rem(186)};
  overflow: hidden;
`;

const ArticleImg = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const ArticleContent = styled.div`
  padding: ${rem(20)} ${rem(20)} ${rem(26)};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.black};
`;

const ArticleTitle = styled.h3`
  font-weight: 500;
  font-size: ${rem(20)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(11)};
`;

const ArticleDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  margin-bottom: ${rem(18)};
`;

const ArticleInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${rem(25)};
`;

const ArticleDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
`;
const ArticleDateIcon = styled.i`
  display: block;
  width: ${rem(18)};
  height: ${rem(18)};
  background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 6.28125C17 5.23719 17 4.50678 17 4.4375C17 3.66209 16.3692 3.03125 15.5938 3.03125H15.4062V4.75C15.4062 5.00887 15.1964 5.21875 14.9375 5.21875C14.6786 5.21875 14.4688 5.00887 14.4688 4.75C14.4688 4.22378 14.4688 2.774 14.4688 2.25C14.4688 1.99112 14.2589 1.78125 14 1.78125C13.7411 1.78125 13.5312 1.99112 13.5312 2.25V3.03125H10.4062V4.75C10.4062 5.00887 10.1964 5.21875 9.9375 5.21875C9.67863 5.21875 9.46875 5.00887 9.46875 4.75C9.46875 4.22378 9.46875 2.774 9.46875 2.25C9.46875 1.99112 9.25887 1.78125 9 1.78125C8.74113 1.78125 8.53125 1.99112 8.53125 2.25V3.03125H5.40625V4.75C5.40625 5.00887 5.19637 5.21875 4.9375 5.21875C4.67863 5.21875 4.46875 5.00887 4.46875 4.75C4.46875 4.22378 4.46875 2.774 4.46875 2.25C4.46875 1.99112 4.25887 1.78125 4 1.78125C3.74113 1.78125 3.53125 1.99112 3.53125 2.25V3.03125H2.40625C1.63084 3.03125 1 3.66209 1 4.4375V6.28125H17Z' fill='%235D6C7B'/%3E%3Cpath d='M1 7.21875V14.8125C1 15.5879 1.63084 16.2188 2.40625 16.2188H15.5938C16.3692 16.2188 17 15.5879 17 14.8125C17 14.6117 17 10.2246 17 7.21875C16.7083 7.21875 1.16138 7.21875 1 7.21875ZM5.5 13.7188H4.5C4.24113 13.7188 4.03125 13.5089 4.03125 13.25C4.03125 12.9911 4.24113 12.7812 4.5 12.7812H5.5C5.75887 12.7812 5.96875 12.9911 5.96875 13.25C5.96875 13.5089 5.75887 13.7188 5.5 13.7188ZM5.5 11.7188H4.5C4.24113 11.7188 4.03125 11.5089 4.03125 11.25C4.03125 10.9911 4.24113 10.7812 4.5 10.7812H5.5C5.75887 10.7812 5.96875 10.9911 5.96875 11.25C5.96875 11.5089 5.75887 11.7188 5.5 11.7188ZM5.5 9.71875H4.5C4.24113 9.71875 4.03125 9.50887 4.03125 9.25C4.03125 8.99112 4.24113 8.78125 4.5 8.78125H5.5C5.75887 8.78125 5.96875 8.99112 5.96875 9.25C5.96875 9.50887 5.75887 9.71875 5.5 9.71875ZM9.5 13.7188H8.5C8.24113 13.7188 8.03125 13.5089 8.03125 13.25C8.03125 12.9911 8.24113 12.7812 8.5 12.7812H9.5C9.75887 12.7812 9.96875 12.9911 9.96875 13.25C9.96875 13.5089 9.75887 13.7188 9.5 13.7188ZM9.5 11.7188H8.5C8.24113 11.7188 8.03125 11.5089 8.03125 11.25C8.03125 10.9911 8.24113 10.7812 8.5 10.7812H9.5C9.75887 10.7812 9.96875 10.9911 9.96875 11.25C9.96875 11.5089 9.75887 11.7188 9.5 11.7188ZM9.5 9.71875H8.5C8.24113 9.71875 8.03125 9.50887 8.03125 9.25C8.03125 8.99112 8.24113 8.78125 8.5 8.78125H9.5C9.75887 8.78125 9.96875 8.99112 9.96875 9.25C9.96875 9.50887 9.75887 9.71875 9.5 9.71875ZM13.5 13.7188H12.5C12.2411 13.7188 12.0312 13.5089 12.0312 13.25C12.0312 12.9911 12.2411 12.7812 12.5 12.7812H13.5C13.7589 12.7812 13.9688 12.9911 13.9688 13.25C13.9688 13.5089 13.7589 13.7188 13.5 13.7188ZM13.5 11.7188H12.5C12.2411 11.7188 12.0312 11.5089 12.0312 11.25C12.0312 10.9911 12.2411 10.7812 12.5 10.7812H13.5C13.7589 10.7812 13.9688 10.9911 13.9688 11.25C13.9688 11.5089 13.7589 11.7188 13.5 11.7188ZM13.5 9.71875H12.5C12.2411 9.71875 12.0312 9.50887 12.0312 9.25C12.0312 8.99112 12.2411 8.78125 12.5 8.78125H13.5C13.7589 8.78125 13.9688 8.99112 13.9688 9.25C13.9688 9.50887 13.7589 9.71875 13.5 9.71875Z' fill='%235D6C7B'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;

const ArticleDateValue = styled.p`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
`;

const ArticleView = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
`;

const ArticleViewIcon = styled.i`
  display: block;
  width: ${rem(18)};
  height: ${rem(18)};
  background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 10.125C9.62132 10.125 10.125 9.62132 10.125 9C10.125 8.37868 9.62132 7.875 9 7.875C8.37868 7.875 7.875 8.37868 7.875 9C7.875 9.62132 8.37868 10.125 9 10.125Z' fill='%235D6C7B'/%3E%3Cpath d='M16.4026 8.62478C15.9226 7.79228 13.2826 3.61478 8.79755 3.74978C4.65005 3.85478 2.25005 7.49978 1.59755 8.62478C1.53173 8.7388 1.49707 8.86813 1.49707 8.99978C1.49707 9.13143 1.53173 9.26077 1.59755 9.37478C2.07005 10.1923 4.59755 14.2498 9.01505 14.2498H9.20255C13.3501 14.1448 15.7576 10.4998 16.4026 9.37478C16.4684 9.26077 16.503 9.13143 16.503 8.99978C16.503 8.86813 16.4684 8.7388 16.4026 8.62478ZM9.00005 11.6248C8.48088 11.6248 7.97336 11.4708 7.54168 11.1824C7.11 10.894 6.77355 10.484 6.57487 10.0043C6.37619 9.52467 6.3242 8.99687 6.42549 8.48767C6.52678 7.97847 6.77678 7.51074 7.1439 7.14363C7.51101 6.77651 7.97874 6.52651 8.48794 6.42522C8.99714 6.32393 9.52494 6.37592 10.0046 6.5746C10.4843 6.77328 10.8942 7.10973 11.1827 7.54141C11.4711 7.97309 11.6251 8.48061 11.6251 8.99978C11.6251 9.69598 11.3485 10.3637 10.8562 10.8559C10.3639 11.3482 9.69625 11.6248 9.00005 11.6248Z' fill='%235D6C7B'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;

const ArticleViewValue = styled.p`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
`;

export default Article;
