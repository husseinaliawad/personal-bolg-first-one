import React, { useState } from 'react';

const BlogSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    // Perform search logic here, such as filtering blog posts based on the search query
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default BlogSearchBar;