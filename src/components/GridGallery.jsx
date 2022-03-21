import React from 'react';
import styled from 'styled-components'

export default function GridGallery({images}) {
    const ImageContainer = styled.div`
    padding-top: 120px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    `
  return ( 
    <ImageContainer>
      {images && images.map((imageUrl) => <img src={imageUrl} alt='img'/>)}
    </ImageContainer> 
    
    )
};
