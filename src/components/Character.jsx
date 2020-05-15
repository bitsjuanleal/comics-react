import React from 'react';
import './styles/character.scss';

function Character(props) {
  const { imgPath, background } = props.config;
  const styleImg = {
    width: '100%',
    backgroundColor: background,
  };
  return (
    <div className="card">
      <div className="card-body">
        <img src={imgPath} alt="Avatar" style={styleImg} />
        <div className="card-container">
          <h4>
            <b>Character</b>
          </h4>
          <p>Captain America</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
