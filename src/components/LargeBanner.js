import  '../styles/Gradients/FullGradients.css'
import CloseIcon from '@mui/icons-material/Close';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CodeIcon from '@mui/icons-material/Code';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import DocTitle from '../hooks/DocTitle';
import { useState } from 'react';

const   LargeBanner=({setBanner,item})=>{
    const   [rotate,setRotate]=useState('to left')
    const   [length,setLength]=useState(1)
    const   [code,setCode]=useState(false)
    const   gradientPath=[
        {location:'to left'},
        {location:'to right'},
        {location:'to top'},
        {location:'to bottom'},
      
      
    ]
const leftIcons=[
    {Icon:RotateRightIcon,onClick:()=>
        {
            if(length===gradientPath.length){
                setRotate(gradientPath[0].location)
                setLength(1)
               
            }
            

            else{
            setLength(length+1)

                setRotate(gradientPath[length].location)

            }
         
            
        },
        id:1
    },
    {Icon:CodeIcon,id:2,onClick:()=>{setCode(true)}},
    {Icon:AddIcon,id:3},
    {Icon:DownloadIcon,id:4}
]

const   buttonClick={
    onClick:()=>{
const   copyText=document.querySelector('.code__semiblock')


    }
}
    return(
       <div className="gradient__header">
<div    className="gradient__header__flex">
<CloseIcon  onClick={()=>{setBanner('small');DocTitle('SweetGradients')}}/>
<div    className="grad__name">{item.colors.join('→')}</div>

<div    className="right__icons">
{leftIcons.map(({Icon,onClick,id})=>(<Icon key={id}  onClick={onClick}></Icon>))}
</div>

</div>

 <div    className={`full__gradient`} style={{backgroundImage:`linear-gradient(${rotate},${item.colors})`}}>
{item.name}
<div>{code&&(<div   className={`code__block`}>
<p>Copy CSS code</p>
<div    className="code__semiblock">
    <p><span>background</span>:{item.colors[1]}</p>
   <p><span>background</span>:-webkit-linear-gradient({rotate},{item.colors});</p>
   <p><span>background</span>:linear-gradient({rotate},{item.colors})</p>
</div>
<button {...buttonClick}>click to copy</button>

</div>)}</div>
        </div>

           </div>

    )
}

export default  LargeBanner