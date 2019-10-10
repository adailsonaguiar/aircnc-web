import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }: { history: any }) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await api.post('/sessions', { email });

    const { _id } = res.data;
    localStorage.setItem('user', _id);
    history.push('/dashboard');
  };
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
