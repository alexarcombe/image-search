import React, { useState, useRef, useEffect } from 'react';

function ImageCard(props) {
  const { description, urls } = props;
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener('load', setSpan);
    }
  }, [imageRef]);

  const setSpan = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    setSpans(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;
