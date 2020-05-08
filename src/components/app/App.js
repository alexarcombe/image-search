import React, { useState } from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from '../search-bar/SearchBar';
import ImageList from '../image-list/ImageList';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (e, search) => {
    e.preventDefault();
    const response = await unsplash.get('search/photos', {
      params: { query: search },
    });
    const urls = response.data.results;
    setImages(urls);
  };

  return (
    <div className="app ui container">
      <SearchBar handleSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
