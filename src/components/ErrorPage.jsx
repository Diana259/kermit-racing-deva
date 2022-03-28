import React from 'react';
import styled from 'styled-components'

const StyledErrorPage = styled.div `
 height: 100vh;
    padding-top: 90px;
    width: 100%;
    background-color: rgb(233, 233, 233);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    h1 {
      color: rgb(134, 190, 43);
      text-shadow: 4px 3px rgb(48, 77, 2, 0.9);
      font-size: 3em;
    }
 `

export default function ErrorPage() {
    
  return (
      <>
      <StyledErrorPage>
      <h1>Page Not Found</h1>
      <img src='/img/no.png' alt='404'/>
      </StyledErrorPage>
      </>
  )
}
