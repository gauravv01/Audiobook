import React from 'react';
import {useParams} from 'react-router-dom';
import {data} from '../../Store/data'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AudioX from './audio/Audio';
import './Player.css';

function Player(props) {
    const {Bookname}=useParams();
const item=data.find(item=>item.bookname===Bookname);
  return (
    <>
    <header className='playerheader'>
<KeyboardArrowDownIcon className='playericon'/>
<p className='Name'>{item.bookname}</p>
<p>...</p>
    </header>
    <div className='coverimg'>
        <img  className='Img' src={item.img} alt='BookImage'/>
    </div>
    <div className='title'>
    <p className='bookname'>{item.bookname}</p>
    <p className='authorname'>{item.author}</p>
    </div>
    <AudioX/>
    </>
  )
}

export default Player
