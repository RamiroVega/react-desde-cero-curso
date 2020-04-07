import React from 'react';
import PropTypes from 'prop-types';


const Curso = ({title,image,price,profesor}) => (  

    <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            
              <img src={image} alt={title}/>
                
          </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
              {profesor}
            </div>    
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="/#">{`$ ${price} USD`}</a>
            </div>
        </div>
      </article>

);

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps ={
  title: "No se encontro titulo",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLQtsivLTUdfdebOBaGX9ehnMc0cv82vtPBxmPpezZxtopQh1W&usqp=CAU",
  price : "--",
  profesor:""
}

export default Curso;