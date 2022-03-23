import React from 'react';
import styled from 'styled-components'

export default function CoverSlider() {
  
    const Cover = styled.div`
    background-image: url('img/cover.jpg');
    background-size: cover;
    height: 500px;
    `
  return (
    <Cover />
  )
}
