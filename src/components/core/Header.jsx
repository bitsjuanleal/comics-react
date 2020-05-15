import React from 'react';
import '../styles/header.scss';

function Header(props) {
  const { title, imgUrl } = props;
  var divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  };
  return (
    <header style={divStyle}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
