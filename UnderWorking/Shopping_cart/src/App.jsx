import {Routes,Route,Outlet} from 'react-router-dom';
import Headerz from "./Components/Layout/Layout";
import Home from './Components/Home/Home';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Headerz/>} >
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
