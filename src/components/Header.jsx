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
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Tooltip } from '@mui/material';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
//change    to  dark    mode    and light   mode
export default function Header(){
    const   [starCount,setStarCount]=useState(0)



    useEffect(()=>{
       const fetchData= async ()=>{
           try{
            const    res= await   fetch('https://api.github.com/repos/johnbabu021/sweetgradients')
            const       data=await      res.json()
            setStarCount(data.stargazers_count)
           }
       catch(err){
           throw    new Error('Internal server Error'," " ,err)
       }
}
fetchData()
    },[starCount])
    

    const    [input,setInput]=useState('')
    const       [fullScreen,setFullScreen]=useState(false)

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
document.addEventListener('keydown',(e)=>{
   const        search=   document.querySelector('.search__input')
  
        search.focus()

    
})
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
            
            }/>}
           
            </div>
           <Tooltip title={`${!fullScreen?"enter fullscreen":"exit fullscreen"}`}>
           <div className='fullscreen'   style={{
                display:'flex',
                width:'100px',
                cursor:'pointer',
                justifyContent:'center'
            }}
            onClick={()=>{
                if(!document.fullscreenElement){
                    document.documentElement.requestFullscreen()
                    setFullScreen(true)
                }
                else{
                    if(document.fullscreenElement){
                        document.exitFullscreen()
                        setFullScreen(false)
                    }
                }
            }}
            >
      { fullScreen?  ( <FullscreenExitIcon/>): ( <FullscreenIcon/>)}

            </div>
           </Tooltip>

<div    className="flex"><a className={`github__logo    ${theme==='light'?'git_light':'git_dark'}`} href="https://github.com/johnbabu021/sweetgradients"><GitHubIcon/><span>star</span></a>
<div    className="star">
    {starCount}
</div>

</div>
</div>
        </div>
    )
}