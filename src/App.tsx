import React from 'react';
import './App.css';

import Routes from './routes';

const logo = require('./assets/logo.png');

const App: React.FC = () => {
  
  return (
    <div className='container'>
      <img src={logo} style={{ width: 230 }} />
      <div className='content'>
        <Routes />
      </div>
    </div>
  );
};

export default App;
