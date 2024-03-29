import  '../styles/Gradients/FullGradients.css'
import CloseIcon from '@mui/icons-material/Close';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CodeIcon from '@mui/icons-material/Code';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import DocTitle from '../hooks/DocTitle';
import { Tooltip } from '@mui/material';
import { useEffect } from 'react';
import { useReducer } from 'react';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import toast, { Toaster } from 'react-hot-toast';
import CheckIcon from '@mui/icons-material/Check';
// import { Box, ThemeProvider, createTheme } from '@mui/system';
// const theme = createTheme({
//     palette: {
//       background: {
//         paper: '#fff',
//       },
//       text: {
//         primary: '#173A5E',
//         secondary: '#46505A',
//       },
//       action: {
//         active: '#001E3C',
//       },
//       success: {
//         dark: '#009688',
//       },
//     },
//   });
const   LargeBanner=({setBanner,item})=>{

document.addEventListener('keydown',(e)=>{
if(e.key==="Escape"){
    setBanner('small')
}
})


    const   initialState={
        rotate:'to left',
        length:0,
        code:false,
        copyIt:false,
        copyUpper:false,
       
    }

const       reducer=(state,action)=>{
    return{...state,...action}
}
//  switch(action.type){
//    case 'rotate': return  {...state,rotate:action.payload};
//    case 'length': return  {...state,length:action.payload};
//    case 'code'  :return     {...state,code:action.payload};
//    case 'copyIt': return        {...state,copyIt:action.payload};
//    case 'copyUpper':return  {...state,copyUpper:action.payload}
//    default: return  {state}

//  }


// }


    const [state, dispatch] = useReducer(reducer, initialState);

    const   gradientPath=[
        {location:'to left'},
        {location:'to right'},
        {location:'to top'},
        {location:'to bottom'},
      
      
    ]

   

const leftIcons=[
    {Icon:RotateRightIcon,onClick:async()=>
        {
            if(state.length===gradientPath.length-1){
                dispatch({rotate:gradientPath[gradientPath.length-1].location})
                dispatch({length:1})
              
               
            }
            // else if(state.length===0){
            //     dispatch({length:state.length+1})
            //     dispatch({rotate:gradientPath[state.length+1].location})
 
            // }
          
            else{
           await    dispatch({length:state.length+1})
                dispatch({rotate:gradientPath[state.length].location})

            }
         
            
        },
        title:'rotate'
        
    },
    {Icon:CodeIcon,onClick:()=>{                        
        dispatch({code:true})},title:'get css code'},
    {Icon:AddIcon,title:'add new gradient',onClick:()=>{
window.open('https://github.com/johnbabu021/sweetgradients/blob/master/README.md')    }},
    {Icon:DownloadIcon,title:'download image',
onClick:(e)=>{
// const       downloadOptions=document.createElement('h1')
// const   gradientParent=document.querySelector('.full__gradient')
// downloadOptions.textContent="hello"

// downloadOptions.style={
//     color:'white',
//     right:'0',
//     backgroundColor:'red',
//     top:'0',
//     position:'fixed'
// }
// gradientParent.appendChild(downloadOptions)

const       canvas=document.createElement('canvas')
canvas.height='2000'
canvas.width="2000"
const   ctx=canvas.getContext('2d')

const   grd=ctx.createLinearGradient(0,0,950,0)
item.colors.map((color,index,grads)=>
    // if(index<=1)
    // console.log(index,grads.length)
    grd.addColorStop(index/(grads.length-1),color)
    // if(index===2)
    // grd.addColorStop(0.35,color)
)

ctx.fillStyle=grd
ctx.fillRect(100,100,1500,1500)

const   a=document.createElement('a')
a.href=canvas.toDataURL("image/png")
a.download=`${item.name}.png`
a.click()

// console.log(a)
// document.body.append(a)


// a.addEventListener('click',(e)=>{

    // e.target.href=canvas.toDataURL()
// })
// a.download=canvas.toDataURL()
// console.log(a)

}

}
]

useEffect(()=>{
    const   selectionArea=document.querySelector('.grad__name')
    selectionArea.addEventListener('copy',(event)=>{
        const       selection=document.getSelection()
        event.clipboardData.setData('text/plain',`background
        :linear-gradient(to left,${selection.toString()})`)
        event.preventDefault()
    })
        },[item])
const   buttonClick={
    onClick:async()=>{

           dispatch({copyIt:true})
           setTimeout(()=>{
            dispatch({code:false})
           },100)
          toast.custom(<div style={{
              background:"#fff",
              borderRadius:"10px",
              padding:"10px",
              color:"green",
              display:"flex",
              alignItems:"center",
              marginBottom:"10px"
        }}>copied to clipboard<CheckIcon
        style={{
            color:"green",
            marginLeft:"5px",
            backgroundColor:"white",
            boxShadow:"2px 2px 25px rgba(0,0,0,0.8)",
            borderRadius:"50%"
        }}
        /></div>,{
              duration:100,
              position:'bottom-right',
              
            })
        navigator.clipboard.writeText(`background:${item.colors[1]};background:-webkit-linear-gradient(${state.rotate},${item.colors});/* fallback for old browsers */background:linear-gradient(${state.rotate},${item.colors}); /* for new Browsers*/`)

    }
}
    return(
       <div className="gradient__header">
<div    className="gradient__header__flex">
<CloseIcon  onClick={()=>{
    setBanner('small');
DocTitle('SweetGradients')}}/>
<Tooltip    title={!state.copyUpper?"copy css code":'copied'}>
<div    className="grad__name"  onClick={()=>{
    dispatch({copyUpper:true})
    navigator.clipboard.writeText(`background:${item.colors};`)}}>{item.colors.join('→')}
    </div>

</Tooltip>

<div    className="right__icons">
{leftIcons.map(({Icon,onClick,title},index)=>{   
     return  (
         <Tooltip TransitionComponent={Fade}
          enterDelay={300} leaveDelay={50} 
           key={index}  title={title} >
               <Icon  onClick={onClick}></Icon>
     </Tooltip>
     )})}
</div>

</div>

 <div    className={`full__gradient`} 
 style={{backgroundImage:`linear-gradient(${state.rotate},${item.colors})`}}>
{item.name}
<div>{state.code&&(<div   className={`code__block`}>
<p>Copy CSS code</p>
<div    className="code__semiblock">
    <p><span>background</span>:{item.colors[1]} </p>
   <p><span>background</span>:-webkit-linear-gradient({state.rotate},{item.colors});<span>{' /* fallback for old Browsers */'}</span></p>
   <p><span>background</span>:linear-gradient({state.rotate},{item.colors});<span>{ '/* fallback for new Browsers  */'}</span></p>
</div>
<Tooltip    TransitionComponent={Zoom} 
title={state.copyIt?'copied':'click to copy'}>
    <button {...buttonClick}>click to copy</button>
</Tooltip>
</div>)}</div>
        </div>
        <Toaster
  containerStyle={{

    bottom: 0,
    right: 20,
  }}
/>           </div>

    )
}

export default  LargeBanner