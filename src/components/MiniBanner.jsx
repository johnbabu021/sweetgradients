import { useState } from 'react'
import Gradients from   '../constants/gradients.json'
import DocTitle from '../hooks/DocTitle'
import  '../styles/Gradients/MiniGradients.css'
import LargeBanner from './LargeBanner'

const   MiniBanner=()=>{
    const [banner,setBanner]=useState('small')
    const [gradient,setGradient]=useState(null)
return(

    <div    className={`${banner==='small'&&'mini__banner'}`}>
    {banner==='small'?
        Gradients.map(item=>(
            <div          onClick={()=>{
                setBanner('large');
                setGradient(item);
                DocTitle(item.name)
            }}
            key={item.name}   className="gradient__container" style={{backgroundImage:`linear-gradient(to right,${item.colors})`}}>
            {item.name}
                </div>
        )):<LargeBanner item={gradient}></LargeBanner>
    }
    </div>
)
}
export  default MiniBanner