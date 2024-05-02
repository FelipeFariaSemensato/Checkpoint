import React from 'react';
import './style.css';

const Sobre = () => {
  return (
    <div className='container'>
      <div className='flex-container'>
        <figure>
          <img src="pao.jpeg"/>
        </figure>
        <div className='text'>
          <h1 className='title'>Quem nós somos?</h1>
          <p className='texto'>Somos a panificadora Roger, fundado em 1969 <br/>
          por Roger Jacinto Pinto  temos como objetivo fazer <br/>
          os melhores pães e bolos e entregar com amor e carinho <br/>
          para todas as famílias para que desfrutem de um café da manhã<br/>
           ou da tarde de qualidade com os melhores pães.<br/>
           <br/>
           Rua Jurandir Lopes n°69, Praça da Lagoa CEP 40028-922
        </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;