import { useEffect, useState ,useContext} from "react";
import { ModeContextProvider} from "./Context/contextAPI"
import ButtonClick from "./Components/buttonclick";
import './app.css';

function App() {


  let [theme,setTheme]=useState('light');

  const darkMode=()=>{
    setTheme('dark')
    console.log('sat')
  }

  const lightMode=()=>{
    setTheme('light')
    console.log('sat2')
  }

  useEffect(()=>{
    console.log(document);
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(theme);
    
  },[theme])
  
  

  return (
    <ModeContextProvider value={{theme,darkMode,lightMode}}>

      <div>
        <div>
          <h1>Hello there!</h1>
          <br/>
          <ButtonClick/>
        </div>
      </div>
    </ModeContextProvider>
  )
}

export default App
