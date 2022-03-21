import React from 'react';
import GridGallery from '../components/GridGallery';

export default function Gallery() {

  const images = [
     "img/gallery/gallery2.jpg",
     "img/gallery/gallery3.jpg",
     "img/gallery/gallery4.jpg",
     "img/gallery/gallery5.jpg",
     "img/gallery/gallery9.jpg",
     "img/gallery/gallery6.jpg",
     "img/gallery/gallery7.jpg",
     "img/gallery/gallery8.jpg",
     "img/gallery/gallery10.jpg",
     "img/gallery/gallery11.jpg",
     "img/gallery/gallery12.jpg",
     "img/gallery/gallery13.jpg",
     "img/gallery/gallery14.jpg",
     "img/gallery/gallery15.jpg"
  ]
  return (
    <GridGallery key='images' images={images} />
  )
}
