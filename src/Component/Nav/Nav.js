import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import './Nav.css';


function Nav() {
  return (
    <div className='main'>
      <p className='heading'>AudioBooks</p>
     <div><SettingsIcon className='icon'/></div> 
    </div>
  )
}

export default Nav
