import {useState} from 'react'
import { themeContext } from '../themeContext';
import  Gradients from '../gradients.json'
export default function ThemeContext({children}){
    const   [theme,setTheme]=useState(localStorage.getItem('theme'));
    const     [data,setData]=useState(Gradients)
return(
    <themeContext.Provider value={{theme,setTheme,data,setData}}>
    {children}
</themeContext.Provider>


)

}