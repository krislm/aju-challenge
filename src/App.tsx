import React from 'react';
import './App.scss';
import Header from './components/header';
import arrow from './assets/doodle_arrow.svg';
import heatleft from './assets/doodle_heat_left.svg';
import heatright from './assets/doodle_heat_right.svg';
import light from './assets/doodle_light.svg';
import bikeexif from './assets/media_bikeexif.png';
import pipeburn from './assets/media_pipeburn.png';
import greasy from './assets/Greasy.png';
import chopcult from './assets/media_chopcult.png';

function App() {
  return (
    <div>
      <Header />
      <div className="content flex flex--column">
          <div className="content__left">
              <h1>
                  The ultimate<br/> modern battery for<br/> any motorcycle
              </h1>
              <div>
                  <p>Whether you’re running a vintage, building your<br/> perfect café racer or just making your daily<br/> motorcycle as reliable as it can be.</p>
                  <p>We got you covered from €99</p>
              </div>
              <div className="flex flex--row preorder">
                  <button className="button button--small align--end" value="preorder">Preorder</button>
                  <img src={arrow} alt="arrow-doodle" className="doodle arrow"/>
              </div>
          </div>
          <div className="content__right">
              {/*<!--<img src={light} alt="light-doodle" className="doodle light"/>
              <img src={heatleft} alt="heatleft-doodle" className="doodle heat--left"/>
              <img src={heatright} alt="heatright-doodle" className="doodle heat--right"/>-->*/}
          </div>
          <div className="absolute cover" />
      </div>
      <div className="bottom">
          <span>As seen in</span>
          <div className="as-seen-ins flex flex--row flex--wrap">
              <img src={bikeexif} alt="bikeexif"/>
              <img src={pipeburn} alt="pipeburn"/>
              <img src={greasy} alt="greasy"/>
              <img src={chopcult} alt="chopcult"/>
          </div>
      </div>
    </div>
  );
}

export default App;
