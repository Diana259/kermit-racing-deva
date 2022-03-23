
import React from 'react';
import styled from 'styled-components';

export default function Article({article}) {

  const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Title = styled.div`
position: absolute;
color: white;
  font-size: 0.8em;
  align-self:center;
  padding: 0 10px;


`
const Img = styled.img`
border-radius:12px;
object-fit: contain;
mask-image: -moz-linear-gradient();
`
  return (
    <Container>
    <Img src={article.image} alt={article.title} />
    <Title>{article.title}</Title>
    </Container>
  )
}
