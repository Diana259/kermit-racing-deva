import React, { useEffect, useState }  from 'react';
import { getAllArticles } from '../api/articlesApi';
import Article from './Article';

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  const getData = async () => {
    setLoading(true);

    const data = await getAllArticles();

    setLoading(false);
    setArticles(data);
  }

   getData();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
    {articles.map(article => (
      <Article key={article.id} article={article}/>
    ))}
    </div>
  )
}
