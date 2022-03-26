import CoverSlider from '../components/cover-slider';
import styled from 'styled-components';
import Posts from '../components/Posts';

export const PostsGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;
gap: 20px;
`

export default function PostsPage() {

  return (
    <>
      <CoverSlider />
      <PostsGrid>
        <Posts />
      </PostsGrid>
    </>
  )
}
