import Gradients from   '../constants/gradients.json'
import  '../styles/Gradients/MiniGradients.css'
const   MiniBanner=()=>{
return(
    <div    className="mini__banner">
    {
        Gradients.map(item=>(
            <div key={item.name}   className="gradient__container" style={{backgroundImage:`linear-gradient(to right,${item.colors})`}}>
            {item.name}
                </div>
        ))
    }
    </div>
)
}
export  default MiniBanner