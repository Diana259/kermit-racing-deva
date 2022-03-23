 export const getAllArticles = async () => {
    const result = await fetch('http://localhost:3009/posts');
    const json = await result.json();
    return json;
  }