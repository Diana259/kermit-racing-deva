import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 370px;
height: 240px;
background-color: #fff;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
border-radius: 12px;
cursor: pointer;
transition: box-shadow .2s;

&:hover {
  box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.2);
}
`
export default function Article({article}) {

const Img = styled.img`
border-radius:12px;
object-fit: contain;
mask-image: linear-gradient(rgba(1, 30, 0), transparent);

img{
  color: #606060;
}
`
const Title = styled.div`
flex:3;
font-size: 0.8em;
align-self:center;
`

const Date = styled.div`
display: flex;
justify-content: center;
width:50px;
height: 50px;
border-right: 1.5px solid black;
`
const ArticleContent = styled.div`
position: absolute;
display: flex;
color: black;
font-weight:200px;
padding:0 10px 10px;
gap: 10px;
`
  return (
    <Container>
    <Img src={article.image} alt={article.title} />
    <ArticleContent>
    <Date>{article.date}</Date>
    <Title>{article.title}</Title>
    </ArticleContent>
    </Container>
  )
}
