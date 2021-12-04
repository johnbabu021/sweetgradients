import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './constants/context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
      <ThemeContext>
    <App />
    </ThemeContext>

  </React.StrictMode>,
  document.getElementById('root')
);


