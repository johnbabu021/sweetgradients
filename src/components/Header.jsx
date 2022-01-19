import '../styles/Header.css'
import '../../public/SWEETGRADIENTS.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { search } from '../constants/pageHelper';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext, useEffect, useState } from 'react';
import { themeContext } from '../constants/themeContext';
import  Gradients from '../constants/gradients.json'

//change    to  dark    mode    and light   mode
export default function Header(){
    const    [input,setInput]=useState('')

    const   {theme,setTheme,setData}=useContext(themeContext)

useEffect(()=>{
    const       newArray=Gradients.filter(item=>{
        const   color=item.colors.join(' ')
    const       name=item.name.toLowerCase()
    const       dataItem=`${color} ${name}`
return  dataItem.includes(input.toLowerCase())
    })
setData(newArray)
},[input,setData])
    return( 
        <div    className={`header  ${theme==='light'?'light':'dark'}`}>
<img    className="logo__sweet" src="SWEETGRADIENTS.svg"  alt="" />

<div    className="search__container">

<input  placeholder={search}    onChange={(e)=>setInput(e.target.value)} value={input}  className={`search__input   ${theme==='light'?'light':'dark'}`}/>
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

<div    className="flex"><a className={`github__logo    ${theme==='light'?'git_light':'git_dark'}`} href="https://github.com/johnbabu021/sweetgradients"><GitHubIcon/><span>star</span></a>
<div    className="star">
    345
</div>

</div>
</div>
        </div>
    )
}