import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Addmovie from './Components/Addmovie';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addmovie/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
