import { useState } from 'react';
import './mode.css';

export const Mode = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`body-div ${darkMode? 'dark': 'light'}`} >
          <button onClick={()=> setDarkMode(true)}>Dark Mode</button>
          <button  onClick={()=> setDarkMode(false)}>Light Mode</button>
        </div>
  );
}