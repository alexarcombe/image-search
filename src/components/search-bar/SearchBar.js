import React, { useState } from 'react';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  const { handleSubmit } = props;

  return (
    <div>
      <form
        className="ui form"
        onSubmit={(e) => handleSubmit(e, search)}
        style={{ padding: '50px 100px' }}
      >
        <div className="field">
          <label className="search"></label>
          <input
            type="text"
            name="search"
            value={search}
            placeholder="What do you want to search for..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
