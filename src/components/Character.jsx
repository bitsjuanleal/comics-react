import React from 'react';
import './styles/character.scss';
import { Link } from 'react-router-dom';

function Character(props) {
  const { datacharater, config } = props;
  const styleImg = {
    width: '100%',
  };
  const styleDiv = {
    backgroundImage: 'url(' + datacharater.image + ')',
    minHeight: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="hero-img" style={styleDiv}></div>
        <div className="card-container">
          <h4>
            <b>
              <Link to={`/detail${config.pathDetail}${datacharater.name}`}>
                {datacharater.name}
              </Link>
            </b>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Character;
