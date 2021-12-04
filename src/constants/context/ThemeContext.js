import {useState} from 'react'
import { themeContext } from '../themeContext';
export default function ThemeContext({children}){
    const   [theme,setTheme]=useState(localStorage.getItem('theme'));
return(
    <themeContext.Provider value={{theme,setTheme}}>
    {children}
</themeContext.Provider>


)

}