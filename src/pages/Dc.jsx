import React, { useState, useEffect } from 'react';
import Search from '../components/core/Search';
import ListCharacters from '../components/ListCharacters';
import useIsMountedRef from '../components/core/UseIsMountedRef';

function Dc() {
  const api = 'http://localhost:3000/dc';

  const [characters, setCharacters] = useState([]);
  const [charactersList, setCharactersList] = useState([]);
  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (isMountedRef.current) {
          setCharacters(data);
          setCharactersList(data);
        }
      });
  }, [isMountedRef]);

  // filter records by search text
  const excludeColumns = ['image', 'url', 'biography', 'power'];
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === '' || lowercasedValue.length <= 2) {
      setCharactersList(characters);
    } else {
      if (lowercasedValue.length > 2) {
        const filteredData = characters.filter((item) => {
          return Object.keys(item).some((key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setCharactersList(filteredData);
      }
    }
  };
  return (
    <section>
      <Search
        placeholder="Search DC character"
        color="#0376f2"
        borderColor="#0376f2"
        charactersList={charactersList}
        onUpdateCharacters={(query) => filterData(query)}
      />
      {charactersList.length > 0 && (
        <ListCharacters type="dc" characters={charactersList} />
      )}
      {charactersList.length == 0 && (
        <div className="msg-not-found">No characters found!</div>
      )}
    </section>
  );
}

export default Dc;
