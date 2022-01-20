import { useContext, useState } from 'react'
import { themeContext } from '../constants/themeContext'
import DocTitle from '../hooks/DocTitle'
import  '../styles/Gradients/MiniGradients.css'
import LargeBanner from './LargeBanner'

const   MiniBanner=()=>{
    const   {data}=useContext(themeContext)
    const [banner,setBanner]=useState('small')
    const [gradient,setGradient]=useState(null)
    const   [value,setValue]=useState('')
    const    [load,setLoad]=useState(false)
   
setTimeout(()=>{
setLoad(true)
},3000)
return(

    <div    className={`${banner==='small'&&'mini__banner'}`}>
    {(load)?data.length!==0?
    banner==='small'?
    data.map(item=>(
        <div          onClick={()=>{
            setBanner('large');
            setGradient(item);
            DocTitle(item.name)
            // navigator.clipboard.writeText(`background:${item.colors[1]};background:-webkit-linear-gradient(to left,${item.colors});background:linear-gradient({to left},${item.colors})`)
        }}
onMouseOver={()=>{
setValue(item.colors.join(' '))
}}

        key={item.name}   
        className="gradient__container" 
        style={{backgroundImage:`linear-gradient(to right,${item.colors})`}}>
        {value===item.colors.join(' ')?value:item.name}
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
       :( <div  className='loader'>
  <div  className='loader_container'>
  <div> </div>
    <div> </div>
    <div></div>
      </div>
       </div>
       )
}
    </div>
)
}
export  default MiniBanner