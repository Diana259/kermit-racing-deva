import React from 'react';
import styled from 'styled-components';
import { Instagram , Facebook } from '@material-ui/icons';

export default function Footer() {

  const Footer = styled.div`
   background-color: rgb(156, 156, 156);
   display: flex;
   align-items: center;
   padding: 30px;
  `
   const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap:10px
   `
   const Copyright = styled.h4`
   font-weight: 200;
   margin-left: 250px;
   
   `
  return (
    <Footer>
    <SocialMedia>
    <h3>SOCIAL MEDIA</h3>
    <a href='https://www.facebook.com/KermitRacingDeva' rel="noreferrer" target='_blank'><Facebook/></a>
    <a href='https://www.instagram.com/kermitracingdeva/' rel="noreferrer"  target='_blank'><Instagram /></a>
    </SocialMedia>
    <Copyright>Copyright @ 2022 Kermit Racing Deva. All right reserved.</Copyright> 
    </Footer>
  )
}
