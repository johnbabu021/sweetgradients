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


    const   initialState={
        rotate:'to left',
        length:0,
        code:false,
        copyIt:false,
        copyUpper:false,
       
    }

const       reducer=(state,action)=>{
 switch(action.type){
   case 'rotate': return  {...state,rotate:action.payload};
   case 'length': return  {...state,length:action.payload};
   case 'code'  :return     {...state,code:action.payload};
   case 'copyIt': return        {...state,copyIt:action.payload};
   case 'copyUpper':return  {...state,copyUpper:action.payload}
   default: return  {state}

 }


}


    const [state, dispatch] = useReducer(reducer, initialState);

    
  
    const   gradientPath=[
        {location:'to left'},
        {location:'to right'},
        {location:'to top'},
        {location:'to bottom'},
      
      
    ]

   

const leftIcons=[
    {Icon:RotateRightIcon,onClick:()=>
        {

            if(state.length===gradientPath.length-1){
                dispatch({type:'rotate',payload:gradientPath[gradientPath.length-1].location})
                dispatch({type:'length',payload:1})
              
               
            }
          
            else{
           dispatch({type:'length',payload:state.length+1})
                dispatch({type:'rotate',payload:gradientPath[state.length].location})

            }
         
            
        },
        title:'rotate'
        
    },
    {Icon:CodeIcon,onClick:()=>{                        
        dispatch({type:'code',payload:true})},title:'get css code'},
    {Icon:AddIcon,title:'add new gradient',onClick:()=>{
window.open('https://github.com/johnbabu021/sweetgradients/blob/master/README.md')    }},
    {Icon:DownloadIcon,title:'download image'}
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

           dispatch({type:'copyIt',payload:true})
           setTimeout(()=>{
            dispatch({type:'code',payload:false})
           },100)
          
        navigator.clipboard.writeText(`background:${item.colors[1]};background:-webkit-linear-gradient(${state.rotate},${item.colors});background:linear-gradient(${state.rotate},${item.colors})`)

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
    dispatch({type:'copyUpper',payload:true})
    navigator.clipboard.writeText(`background:${item.colors};`)}}>{item.colors.join('→')}
    </div>

</Tooltip>

<div    className="right__icons">
{leftIcons.map(({Icon,onClick,title},index)=>{   
     return  (
         <Tooltip TransitionComponent={Fade} enterDelay={300} leaveDelay={50}  key={index}  title={title} ><Icon  onClick={onClick}></Icon>
     </Tooltip>
     )})}
</div>

</div>

 <div    className={`full__gradient`} style={{backgroundImage:`linear-gradient(${state.rotate},${item.colors})`}}>
{item.name}
<div>{state.code&&(<div   className={`code__block`}>
<p>Copy CSS code</p>
<div    className="code__semiblock">
    <p><span>background</span>:{item.colors[1]}</p>
   <p><span>background</span>:-webkit-linear-gradient({state.rotate},{item.colors});</p>
   <p><span>background</span>:linear-gradient({state.rotate},{item.colors})</p>
</div>
<Tooltip    TransitionComponent={Zoom} title={state.copyIt?'copied':'click to copy'}><button {...buttonClick}>click to copy</button>
</Tooltip>
</div>)}</div>
        </div>
   
           </div>

    )
}

export default  LargeBanner