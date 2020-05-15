import React from 'react';
import Search from '../components/core/Search';
import ListCharacters from '../components/ListCharacters';

function Dc() {
  return (
    <section>
      <Search placeholder="Search DC character" color='#0376f2' borderColor="#0376f2" />
      <ListCharacters type="Dc"/>
    </section>
  );
}

export default Dc;
