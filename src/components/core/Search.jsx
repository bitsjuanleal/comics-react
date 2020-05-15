import React from 'react';
import '../styles/search.scss';

function Search(props) {
  const { placeholder, color, borderColor } = props;
  var inputStyle = {
    borderColor: borderColor,
    color: color,
  };
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder={placeholder}
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default Search;
