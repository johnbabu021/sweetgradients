import '../styles/Header.css'
import '../../public/SWEETGRADIENTS.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { search } from '../constants/pageHelper';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { themeContext } from '../constants/themeContext';


//change    to  dark    mode    and light   mode
export default function Header(){
    const   {theme,setTheme}=useContext(themeContext)

    return( 
        <div    className={`header  ${theme==='light'?'light':'dark'}`}>
<img src="SWEETGRADIENTS.svg"  alt="" />

<div    className="search__container">

<input  placeholder={search}    className={`search__input   ${theme==='light'?'light':'dark'}`}/>
<SearchIcon/>
</div>
<div    className="left__icons">
    <div    className="theme">{theme==='light'?<LightModeIcon     onClick={()=>{
        setTheme('dark')
        localStorage.setItem('theme','dark')
    }
        
        }/>:<DarkModeIcon    onClick={()=>{
            setTheme('light')
            localStorage.setItem('theme','light')
        }
            
            }/>}</div>


<a className="github__logo" href="https://github.com/johnbabu021"><GitHubIcon/></a>
</div>
        </div>
    )
}