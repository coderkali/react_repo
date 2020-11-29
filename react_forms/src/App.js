import React, { useState } from 'react';


function App() {

  const [lastname, setName] = useState();

  //const [lastName, setLastName] = useState();

  const [fullName, setFullName] = useState();

  //const [lastNameNew, setLastNameNew] = useState();

  

  //  const inputEvent = (event) => {
  //     console.log(event.target.value)
  //     setName(event.target.value);
  //  }

   const inputEventTwo = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
    //setLastName(event.target.value);
 }

   const onsumbit = (event) => {
      event.preventDefault();
      setFullName(lastname);
      //setLastNameNew(lastName);
   }



  return (
    <>
    <div>
   {/* <form onSumbit= {onsumbit}>  */}
    
      <h1>Hello {fullName} </h1>
       {/* <input type="text" 
       placeholder="Enter your Name"
       defaultValue="" onChange={inputEvent}
       value = {name}  
       /> */}
       {/* <button onClick={onsumbit}>Submit now</button>  */}
       
       {/* <input type="text" 
       placeholder="Enter your  "
       onChange={inputEvent}
       value = {name}  
       /> */}
       <br />
       <input type="text" 
       placeholder="Enter your Last Name "
       onChange={inputEventTwo}
       value = {lastname}  
       />
       {/* <button type="submit">Submit now</button>  */}

       <button onClick={onsumbit}>Submit now</button> 
    
  {/* </form>   */}
  </div>
 </> 
  );
 
 


}

export default App;
