import React, { useState } from 'react';





const App = () => {

   let newTime = new Date().toLocaleTimeString();

   const [ctime,setCtime] = useState(newTime);

   const [currentTime,setCurrentTime] = useState(newTime);

   const [count, setCount] = useState(0);

   const IncNum = () => {
      newTime = new Date().toLocaleTimeString();
      setCtime(newTime);
      setCount(count +1);
   };

   const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
   }

   setInterval(updateTime, 1000);


  return (
    <>
      <h1> Current Time :: {currentTime}</h1>
      
      <h1> {ctime} </h1>
      <h1> {count} </h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};

export default App;
