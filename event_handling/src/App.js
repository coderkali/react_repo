import React, { useState } from 'react';




const App = () => {
  const purple = 'purple';
  const [bg,setbg] = useState(purple);  

  const [name, setName] = useState('Click Me');


  let bgChange = () => {
    let newBg = '#34495e';
    setbg(newBg);
    setName("Ouch!!")
  };

  let bgBack = () => {
    setbg('purple');
    setName("Click Me!!")
  }



  return (
     <>
      <div style= { { backgroundColor:bg } }>
        <button onMouseOver= {bgChange} onDoubleClick={bgBack}>{name} </button>
      </div>
     </>
  );
}

export default App;
