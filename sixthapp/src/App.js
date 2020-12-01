import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const App =() => {

  const [num,setNum] =  useState(0);

  const incrementNum = () =>{
    setNum(num+1);
  }

  const decrementNum =() =>{
    if(num===0){
      alert('Zero limit reached');
    }else{
      setNum(num-1);
    }
  }


  return (
    <>
      <div>
         <div>
            <h1>{num}</h1>
            <div>
              <Button onClick={incrementNum}><AddIcon/></Button>
              <Tooltip title="Delete">
              <Button onClick={decrementNum}><DeleteIcon/></Button>
              </Tooltip>
            </div>
         </div>
      </div>
    </>
       
  );
}

export default App;
