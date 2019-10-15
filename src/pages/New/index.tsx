import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.png';
import './styles.css';
import { url } from 'inspector';

export default function NewSpot() {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label id='thumbnail' style={{ backgroundImage: `url(${preview})` }}>
        <input
          type='file'
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} style={{ height: '20px' }} />
      </label>
      <label htmlFor='company'>Empresa *</label>
      <input
        id='company'
        placeholder='Sua empresa incrível'
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
      <label htmlFor='techs'>
        Tecnologias * <span>(Separadas por vírgula)</span>
      </label>
      <input
        id='techs'
        placeholder='Quais tecnologias usam?'
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />
      <label htmlFor='price'>
        Valor da diária * <span>(Deixe em branco para diária gratuita)</span>
      </label>
      <input
        id='price'
        placeholder='0,0R$'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button className='btn'>Cadastrar</button>
    </form>
  );
}
