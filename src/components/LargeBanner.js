import  '../styles/Gradients/FullGradients.css'


const   LargeBanner=({item})=>{

    return(

        <div    className="full__gradient" style={{backgroundImage:`linear-gradient(to right,${item.colors})`}}>
{item.name}

        </div>

    )
}

export default  LargeBanner