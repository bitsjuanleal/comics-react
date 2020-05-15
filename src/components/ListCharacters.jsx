import React from 'react';
import Character from './Character';
import './styles/listcharacters.scss';

function ListCharacters(props) {
  const { type } = props;
  const configCardMarvel = {
    imgPath: '../../public/images/capitan.png',
    background: '#ffd4d4'
  }
  const configCardDc = {
    imgPath: '../../public/images/flash.png',
    background: '#e0ecf9'
  }
  const configCard = type == 'Marvel' ? configCardMarvel : configCardDc;
  return (
    <section className="cards-heroes">
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
      <Character config={configCard} />
    </section>
  );
}

export default ListCharacters;
