import React, { useState } from 'react';
import Header from '../components/core/Header';
import Footer from '../components/core/Footer';
import Container from '../components/core/Container';
import Tabs from '../components/core/Tabs';
import Marvel from './Marvel';
import Dc from './Dc';
import CharacterDetail from './CharacterDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import '../components/styles/app.scss';

function Home() {
  var dataMarvel = {
    page: <Marvel />,
    label: 'marvel',
    imgHeader: '../../public/images/marvel.svg',
    title: 'Marvel characters',
    color: '#d40317',
    fontColor: '#ffffff',
  };
  var dataDc = {
    page: <Dc />,
    label: 'dc',
    imgHeader: '../../public/images/dc.svg',
    title: 'DC characters',
    color: '#100055',
    fontColor: '#ffffff',
  };
  var dataDetail = {
    label: 'detail',
    title: 'Character details',
    fontColor: '#272424',
  };
  var defaultComicPage = dataMarvel;
  const getDataComic = (comicName) => {
    let data = dataMarvel;
    switch (comicName) {
      case 'dc':
        data = dataDc;
        break;
      case 'detail':
        data = dataDetail;
        break;
    }
    return data;
    /*return comicName != 'marvel'
      ? comicName == 'dc'
        ? dataDc
        : dataDetail
      : dataMarvel;*/
  };
  const renderRedirect = (path) => {
    return <Redirect to={`/${path}`} />;
  };
  let path = window.location.pathname.split('/').pop();
  defaultComicPage = getDataComic(path);
  const [defaultComic, setDefaultComic] = useState(defaultComicPage);
  const onClickTab = (comic) => {
    var data = comic == 'marvel' ? dataMarvel : dataDc;
    setDefaultComic(data);
  };
  return (
    <Router>
      <Header
        title={defaultComic.title}
        imgUrl={defaultComic.imgHeader}
        textColor={defaultComic.fontColor}
      />
      <Tabs>
        <div
          label="marvel"
          onclickevent={onClickTab}
          activeUrlTab={defaultComic}
        ></div>
        <div
          label="dc"
          onclickevent={onClickTab}
          activeUrlTab={defaultComic}
        ></div>
        {/*<div label="detail" activeUrlTab={defaultComic}></div>*/}
      </Tabs>
      {renderRedirect(defaultComic.label)}
      <Switch>
        <Route exact path="/marvel">
          <Container> {dataMarvel.page} </Container>
        </Route>
        <Route exact path="/dc">
          <Container> {dataDc.page} </Container>
        </Route>
        <Route exact path="/detail/:comic/:name" component={CharacterDetail} />
      </Switch>
      <Footer backgroundColor={defaultComic.color} />
    </Router>
  );
}

export default Home;
