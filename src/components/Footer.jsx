import React from 'react';
import styled from 'styled-components'

export default function Footer() {

  const Footer = styled.div`
   background-color: rgb(156, 156, 156);
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 30px;
  `
  return (
    <Footer>
    <p>Copyright @ 2022 Kermit Racing Deva. All right reserved.</p>
    </Footer>
  )
}
