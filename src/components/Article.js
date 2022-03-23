
import React from 'react';
import styled from 'styled-components';

export default function Article({article}) {

    const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  width: 360px;
  height: 260px;
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
  font-size: 1em;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Img = styled.img`
  object-fit: contain;
`
  return (
    <Container>
    <Title>{article.title}</Title>
        <Img src={article.image} alt={article.title} />
    </Container>
  )
}
