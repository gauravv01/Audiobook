import React from 'react';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import './Tabbar.css';

function Tabbar() {
  return (
    <div className='Tab'>
     <Link to='/'> <div className='icons'>
        <HomeOutlinedIcon className='i'/>
        <p className='p'>Home</p>
      </div>
      </Link>
      <div className='icons'>
        <SearchOutlinedIcon className='i'/>
        <label className='p' >Search</label>
      </div>
      <div className='icons'>
        <LibraryBooksIcon className='i'/>
        <p className='p'>Library</p>
      </div>
    </div>
  )
}

export default Tabbar
