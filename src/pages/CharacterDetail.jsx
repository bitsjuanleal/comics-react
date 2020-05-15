import React from 'react';
import '../components/styles/detailhero.scss';

function CharacterDetail(props) {
  const { label } = props;

  const configCardMarvel = {
    imgPath: '../../public/images/capitan.png',
    background: '#ffd4d4',
  };
  const configCardDc = {
    imgPath: '../../public/images/flash.png',
    background: '#e0ecf9',
  };

  const { imgPath, background } =
    label == 'Marvel' ? configCardMarvel : configCardDc;

  const styleImg = {
    backgroundColor: background,
  };

  return (
    <section className="detail-hero">
      <h1>Hero name</h1>
      <div className="hero-profile">
        <div className="hero-description">
          <img src={imgPath} alt="Avatar" style={styleImg} />
        </div>
        <div>
          <h2>Skills</h2>
          <div className="hero-powers">
            <div>
              <span>Poder 1</span>
              <span className="power-level"> 4 </span>
            </div>
            <div>
              <span>Poder 2</span>
              <span className="power-level"> 7 </span>
            </div>
            <div>
              <span>Poder 3</span>
              <span className="power-level"> 0 </span>
            </div>
            <div>
              <span>Poder 4</span>
              <span className="power-level"> 12 </span>
            </div>
            <div>
              <span>Poder 5</span>
              <span className="power-level"> 9 </span>
            </div>
            <div>
              <span>Poder 6</span>
              <span className="power-level"> 1 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>BIOGRAPHY</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        sollicitudin, est nec porttitor rhoncus, urna dui varius orci, a posuere
        sem ex vel erat. Aenean rhoncus eget sem in commodo. Etiam laoreet,
        neque sed pulvinar venenatis, nisl urna suscipit urna, ac porta risus
        massa a sem. Morbi arcu nibh, facilisis at auctor eget, aliquam nec
        ligula. Phasellus posuere ipsum eget quam varius ultrices. Nullam ac
        viverra libero. Quisque condimentum semper interdum.
      </div>
    </section>
  );
}

export default CharacterDetail;
