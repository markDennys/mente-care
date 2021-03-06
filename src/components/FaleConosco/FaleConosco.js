import React from 'react';
import './faleConosco.css';
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import call from './assets/video-calling.png'

const FaleConosco = () => (
  <div className='container-faleConosco'>
     <Svgs />


    <div className='faleConosco-texts'>
    <h1 className='faleConosco-texts1'><span>Quer falar com a gente?</span></h1>

    <p className='faleConosco-texts2'>É só mandar sua mensagem por aqui ou por nossas redes.</p>
    <p className='faleConosco-texts2'></p>
    </div>
    <div className='faleConosco-form-area'>
    <div className='faleConosco-form-area2'>
    <div className='faleConosco-form'>
    <input className='faleConosco-form-input' type='text' placeholder='Nome completo' />
    <input className='faleConosco-form-input' type='email' placeholder='Email' />
    <input className='faleConosco-form-input' type='text' placeholder='Celular' />
    <textarea rows="5" cols="5" className='faleConosco-form-msg' placeholder="Digite aqui sua mensagem"></textarea>
    <button  className='faleConosco-form-button'>Enviar</button>
    </div>
    
    </div>

    <img className="img-faleconosco" src={call} alt="calling" />
    
   
    </div>
    </div>
);

export default FaleConosco;