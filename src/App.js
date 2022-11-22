import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import PlayMenu from "./Pages/PlayMenu";
import './App.css';


function App() {
  return (
    <div className="App" >
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:Bookname' element={<PlayMenu/>}/>
      </Routes>
    </div>
  );
}

export default App;
