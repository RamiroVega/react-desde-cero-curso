import React from 'react';
import './styles/styles.scss'
import Curso from './Curso';

const cursos =[
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  },{
    "title": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/3c84b04b-4f00-4916-b161-ffe5c6132d19.jpg",
    "price": 50,
    "profesor": "Beto Quiroga"
  },{
    "title": "HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f1fa315c-d94a-4fba-b408-cc852a2f4e41.jpg",
    "price": 60,
    "profesor": "Alavaro Felipe"
  },{
    "title": "GO desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
    "price": 20,
    "profesor": "Alexis Lozada"
  }
];


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
      
        {
          cursos.map(curso => <Curso
            title = {curso.title}
            image = {curso.image}
            price = {curso.price}
            profesor = {curso.profesor}
          />)
        }
      
    </div>
  </>
);

export default App;
