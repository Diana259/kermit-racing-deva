import React from 'react';
import { Instagram , Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Topbar() {
  const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  background-color: transparent;
  color: white;
  width:  stretch;
  position: absolute;
  top: 0;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left:20px;

    img {
      width: 140px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-right:20px;
  }
  `
  const Menu = styled.div`
  font-family: 'Audiowide', cursive;;
  flex: 2;
  display: flex;
  justify-content: space-between;

  `
  const StyledLink = styled(Link)`
  display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Audiowide', cursive;
      color: white;
      text-decoration: none;
      font-size: 1em;
      height: 90px;
      flex: 1;

      &:hover{
        color: lightgreen;
      }
  `


  return (
    <Topbar>
      <div className='left'>
        <img src='img/logo.png' alt='Kermit Racing Deva'></img>
      </div>
      <Menu>
        <StyledLink to="/">ACASĂ</StyledLink>
        <StyledLink to="/about">DESPRE</StyledLink>
        <StyledLink to="/articles">NOUTATI</StyledLink>
        <StyledLink to="/events">EVENIMENTE</StyledLink>
        <StyledLink to="/gallery">GALERIE</StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink>
      </Menu>
      <div className='right'>
        <a href='https://www.facebook.com/KermitRacingDeva' rel="noreferrer" target='_blank'><Facebook/></a>
        <a href='https://www.instagram.com/kermitracingdeva/' rel="noreferrer"  target='_blank'><Instagram /></a>
      </div>
    </Topbar>
  )
}
