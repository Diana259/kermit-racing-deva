import React, { useEffect, useState }  from 'react';
import { getAllPosts } from '../api/websiteApi';
import Post from './Post';
import { PostsGrid } from '../pages/PostsPage';

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  const getData = async () => {
    setLoading(true);

    const data = await getAllPosts();

    setLoading(false);
    setPosts(data);
  }

   getData();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <PostsGrid>
    {posts.map(post => (
      <Post key={post.id} post={post}/>
    ))}
    </PostsGrid>
  )
}
