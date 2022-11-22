import React from 'react';
import Nav from "../Component/Nav/Nav";
import SearchBar from "../Component/SearcBar/Search";
import AllCard from '../Component/AllCards/CardsData';
import Toolbar from "../Component/ToolBar/Toolbar";

function Home() {
  return (
    <div>
      <Nav/>
      <SearchBar/>
      <AllCard/>
      <Toolbar />  
    </div>
  )
}

export default Home
