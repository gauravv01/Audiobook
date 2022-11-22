import React,{useRef} from 'react';
import {data} from '../../../Store/data';
import './input.css';



function Input() {
  const value=useRef('');
  const search=()=>{
    localStorage.removeItem('value')
    const finalresponse= data.filter((response)=>{
    const bookname=response.bookname.toLowerCase();
    const author=response.author.toLowerCase();
  
  if(bookname===value.current.value){
    return response
  }
  else if(author===value.current.value){
    return response
  }
  });
  return localStorage.setItem('value',finalresponse)
  }
  function debouncing(fn,d){
    let timer;
    return function(){
        let context=this;
        clearTimeout(timer);
        timer=setTimeout(()=>{
  fn.apply(context);
        },d)
    }
  }
  const searchbyword=debouncing(search,1000);
  return (
    <div>
      <input placeholder='Search Books or Author...' onInput={searchbyword} ref= {value}/>
    </div>
  )
}

export default Input
