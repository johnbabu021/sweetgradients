import './App.css';
import { useContext } from 'react'
import {themeContext} from './constants/themeContext';
import Home from './pages/Home';

function App() {
  const {theme}=useContext(themeContext)
  
  return (
    
      <div  className={`App  ${theme==='light'?'light':'dark'}`}>

    <Home/>
    </div>
  );
}

export default App;
