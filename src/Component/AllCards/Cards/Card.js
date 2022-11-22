import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css'

function Card(props) {
  return (
   <Link to={`/${props.Bookname}`} >
    <div className='container' onClick={props.onClick}>
    <div className='Card'>
      <img src={props.img } alt='Author'/>
      <div className='CardName'>
        <p className='BookName'>{props.Bookname}</p>
        <p className='Author'>{props.Author}</p>
      </div>
    </div>
    </div>
    </Link>
  )
}

export default Card;
