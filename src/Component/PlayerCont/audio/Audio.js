import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import * as Mat from '@mui/icons-material';
import './Audio.css';

function AudioX(props) {
    const [state,setState]= useState([]);
    const [mark,setMark]=useState();

    const bMark= ()=>{
        console.log(state);
        setMark(state);          
    }

    const Mark = ()=>{
        setState(mark);
    }

    const Change=(e)=>{
        setState(e.target.currentTime);
    }
    return (
        <div className='audio'>
            <div className='player'>
             <audio className='track'controls autoPlay onTimeUpdate={Change}>
                 <source src={props.audio} />
             </audio>
           </div>
           <div className='bookmark'>
               <Button className='button'
                        startIcon={<Mat.BookmarkBorderRounded/>} 
                        variant='outlined' 
                        onClick={bMark}
                        color='primary' 
                        size='small'>
                    Add BookMark 
               </Button>

               <Button className='button'
                        startIcon={<Mat.BookmarksRounded/>} 
                        variant='outlined' 
                        color='secondary'
                        onClick={Mark}
                        size='small'>
                   Last Known Position
               </Button>
               <div className='button'>
                   <p>BookMark Added at {mark} seconds</p>
               </div>
           </div>
        </div>
    )
}

export default AudioX
