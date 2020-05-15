import React, { useState } from 'react';
import Header from '../components/core/Header';
import Footer from '../components/core/Footer';
import Container from '../components/core/Container';
import Tabs from '../components/core/Tabs';
import Marvel from './Marvel';
import Dc from './Dc';
import CharacterDetail from './CharacterDetail';
import '../components/styles/app.scss';

function Home() {
  var dataMarvel = {
    page: <Marvel />,
    label: 'Marvel',
    imgHeader: '../../public/images/marvel.svg',
    title: 'Marvel characters',
    color: '#d40317'
  };
  var dataDc = {
    page: <Dc />,
    label: 'Dc',
    imgHeader: '../../public/images/dc.svg',
    title: 'DC characters',
    color: '#100055'
  };
  const [defaultComic, setDefaultComic] = useState(dataMarvel);
  const onClickTab = (comic) => {
    var data = comic == 'Marvel' ? dataMarvel : dataDc;
    setDefaultComic(data);
  };
  return (
    <React.Fragment>
      <Header title={defaultComic.title} imgUrl={defaultComic.imgHeader} />
      <Tabs>
        <div label="Marvel" onclickevent={onClickTab}>
          <Container> {dataMarvel.page} </Container>
        </div>
        <div label="Dc" onclickevent={onClickTab}>
          <Container> {dataDc.page} </Container>
        </div>
        <div label="detail">
          <Container> <CharacterDetail label={defaultComic.label}/> </Container>
        </div>
      </Tabs>
      <Footer backgroundColor={defaultComic.color}/>
    </React.Fragment>
  );
}

export default Home;
