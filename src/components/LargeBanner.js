import  '../styles/Gradients/FullGradients.css'
import CloseIcon from '@mui/icons-material/Close';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CodeIcon from '@mui/icons-material/Code';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import DocTitle from '../hooks/DocTitle';

const   LargeBanner=({setBanner,item})=>{
const leftIcons=[
    {Icon:RotateRightIcon},
    {Icon:CodeIcon},
    {Icon:AddIcon},
    {Icon:DownloadIcon}
]
    return(
       <div className="gradient__header">
<div    className="gradient__header__flex">
<CloseIcon  onClick={()=>{setBanner('small');DocTitle('SweetGradients')}}/>
<div    className="grad__name">{item.colors.join('→')}</div>

<div    className="right__icons">
{leftIcons.map(({Icon})=>(<Icon></Icon>))}
</div>

</div>

 <div    className="full__gradient" style={{backgroundImage:`linear-gradient(to right,${item.colors})`}}>
{item.name}

        </div>

           </div>

    )
}

export default  LargeBanner