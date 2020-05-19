import React from 'react';
import Character from './Character';
import './styles/listcharacters.scss';

function ListCharacters(props) {
  const { type, characters } = props;
  const configCardMarvel = {
    imgPath: '../../public/images/capitan.png',
    background: '#ffd4d4',
    pathDetail: '/marvel/'
  };
  const configCardDc = {
    imgPath: '../../public/images/flash.png',
    background: '#e0ecf9',
    pathDetail: '/dc/'
  };
  const configCard = type == 'marvel' ? configCardMarvel : configCardDc;
  return (
    <section className="cards-heroes">
      {characters.map((child, index) => {
        return (
          <Character key={index} config={configCard} datacharater={child} />
        );
      })}
    </section>
  );
}

export default ListCharacters;
