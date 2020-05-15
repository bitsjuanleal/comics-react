import React from 'react';
import Search from '../components/core/Search';
import ListCharacters from '../components/ListCharacters';

function Marvel() {
  return (
    <section>
      <Search placeholder="Search Marvel character" color='#d40317' borderColor="#d40317" />
      <ListCharacters type="Marvel"/>
    </section>
  );
}

export default Marvel;
