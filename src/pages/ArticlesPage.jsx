import CoverSlider from '../components/cover-slider';
import styled from 'styled-components';
//import React, { useState, useEffect  } from 'react';
//import { getAllArticles } from '../api/articlesApi';
//import Article from '../components/Article';
import Articles from '../components/Articles';

export const ArticlesGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 40px;
gap: 20px;
`

export default function ArticlesPage() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getAllArticles();

  //     setArticles(data);
  //   })();
  // }, []);
  return (
    <>
      <CoverSlider />
      <ArticlesGrid>
        <Articles />
      </ArticlesGrid>
    </>
  )
}
