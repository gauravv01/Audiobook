import React from 'react';
import HomeIndicator from './HomeIndicator/HomeIndicator';
import Tabbar from './Topbar/Tabbar';
import './Toolbar.css';

function Toolbar() {
  return (
    <div className='top'>
      <Tabbar />
      <HomeIndicator/>
    </div>
  )
}

export default Toolbar
