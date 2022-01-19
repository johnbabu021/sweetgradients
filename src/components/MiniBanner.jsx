import { useContext, useState } from 'react'
import { themeContext } from '../constants/themeContext'
import DocTitle from '../hooks/DocTitle'
import  '../styles/Gradients/MiniGradients.css'
import LargeBanner from './LargeBanner'

const   MiniBanner=()=>{
    const   {data}=useContext(themeContext)
    const [banner,setBanner]=useState('small')
    const [gradient,setGradient]=useState(null)
return(

    <div    className={`${banner==='small'&&'mini__banner'}`}>
    {data.length!==0?
    banner==='small'?
    data.map(item=>(
        <div          onClick={()=>{
            setBanner('large');
            setGradient(item);
            DocTitle(item.name)
        }}
        key={item.name}   className="gradient__container" style={{backgroundImage:`linear-gradient(to right,${item.colors})`}}>
        {item.name}
            </div>
    )):<LargeBanner setBanner={setBanner} item={gradient}></LargeBanner>:
   <div style={{
       display:'grid',
       minHeight:'100vh',
       minWidth:'100vw',
       placeItems:'center'
   }}>
     <div   style={{
         display:'grid',
         placeItems:'center'
     }}>
     <p>Not Found</p>
       <img
        style={{
height:'200px',
width:'200px'
        }}
         src="404.svg"  alt="not found"/>
       </div>
       </div>
}
    </div>
)
}
export  default MiniBanner