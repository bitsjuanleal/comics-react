import React, { useState, useEffect } from 'react';
import '../components/styles/detailhero.scss';
import Powers from '../components/Powers';

function CharacterDetail(props) {
  // const { label } = props;
  // const label = 'marvel';
  const { comic, name } = props.match.params;
  // const name = 'Character Name';
  
  const api = `http://localhost:3000/${comic}?name=${name}`;
  const [character, setCharacterDetail] = useState([]);
  const [powers, setPowersCharacter] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setCharacterDetail(data[0]);
      });
  }, []);

  useEffect(() => {
    setPowersCharacter(character.powers);
  }, [character]);

  const configCardMarvel = {
    background: '#ffd4d4',
    repeatPowers: 'repeat(3, 1fr)'
  };
  const configCardDc = {
    background: '#e0ecf9',
    repeatPowers: 'repeat(2, 1fr)'
  };

  const getDataComic = (comicName) => {
    let data = configCardMarvel;
    switch (comicName) {
      case 'dc':
        data = configCardDc;
        break;
      case 'detail':
        data = configCardMarvel;
        break;
    }
    return data;
  };

  const { background, repeatPowers } = getDataComic(comic);

  const styleImg = {
    backgroundColor: background,
  };
  const styleDiv = {
    gridTemplateColumns: repeatPowers,
  };

  return (
    <section className="detail-hero">
      <h1>{character.name}</h1>
      <div className="hero-profile">
        <div className="hero-description">
          <img src={character.image} alt="Avatar" style={styleImg} />
        </div>
        <div>
          <h2>Skills</h2>
          <div className="hero-powers" style={styleDiv}>
            <Powers powers={powers} />
          </div>
        </div>
      </div>
      <div className="description">
        <h2>BIOGRAPHY</h2>
        {character.biography}
      </div>
    </section>
  );
}

export default CharacterDetail;
