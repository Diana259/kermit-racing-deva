import CoverSlider from '../components/cover-slider';
import styled from 'styled-components';
import Articles from '../components/Articles';

export const ArticlesGrid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;
gap: 20px;
`

export default function ArticlesPage() {

  return (
    <>
      <CoverSlider />
      <ArticlesGrid>
        <Articles />
      </ArticlesGrid>
    </>
  )
}
