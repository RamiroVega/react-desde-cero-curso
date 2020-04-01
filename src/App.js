import React from 'react';
import './styles/styles.scss'
import Curso from './Curso';

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="Reac.js" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLQtsivLTUdfdebOBaGX9ehnMc0cv82vtPBxmPpezZxtopQh1W&usqp=CAU"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso de react.js</p>
            <p> Edteam</p>
            <a  href="https://ed.team" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
  </div>

    <div className="ed-grid m-grid-3">
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
    </div>
  </>
);

export default App;
