/* eslint-disable prefer-destructuring */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Button } from 'components/Atoms/Button/Button';
import axios from 'axios';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';

// const DATOCMS_TOKEN = process.env.REACT_APP_DATOCMS_TOKEN;

export const query = `
        {
            allArticles {
                id
                title
                category
                content
                image {
                    url
                }
            }
        }
    `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        `https://graphql.datocms.com/`,
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then((res) => setArticles(res.data.data.allArticles))
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig type="button">
              Click
            </Button>
          </ArticleWrapper>
        ))
      ) : (
        <TitleWrapper>{error ? error : 'Loading...'}</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
