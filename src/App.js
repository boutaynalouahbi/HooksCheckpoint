import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Description from './Components/Description';

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='about' element={<About/>}/> 
        <Route path='contact' element={<Contact/>}/>
        <Route path='description/:id' element={<Description/>}/>
      </Routes>
    
    </>
    
  );
}

export default App;
