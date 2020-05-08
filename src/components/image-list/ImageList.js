import React from 'react';
import './ImageList.css';
import ImageCard from '../image-card/ImageCard';

function ImageList(props) {
  const { images } = props;

  const content = images.map((image) => {
    const { id, description, urls } = image;
    return <ImageCard key={id} description={description} urls={urls} />;
  });
  return <div className="image-container">{content}</div>;
}

export default ImageList;
