import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await api.post('/sessions', { email });

    const { _id } = res.data;
    localStorage.setItem('user', _id);
  }
  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para devs e encontre{' '}
        <strong>talentos</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email *</label>
        <input
          type='email'
          id='email'
          placeholder='Seu melhor E-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className='btn' type='submit'>
          ENTRAR
        </button>
      </form>
    </>
  );
}
