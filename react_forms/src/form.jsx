import React, { useState } from 'react';



const Form = () => {
   
    const[fullName, setFullName] = useState({
        fName: '',
        lname: '',
    });

     
    

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const value  =  event.target.value;
        const name = event.target.name;
        
        setFullName((preval) => {
              if(name === 'fName'){
                return {
                    fName: value,
                    lname: preval.lname,
                };
              }
             else if(name === 'lName') {
                return {
                    fName: preval.fName,
                    lname: value,
                };
             } 
        })

    }

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submiyyed");
    }

    return (
        <>
          <div>
              <form onSubmit={onSubmits}>
                <div>
                    <h1> Hello {fullName.fName} {fullName.lname}</h1>
                    <input 
                       type="text"
                       placeholder="Enter Your Name"
                       name="fName" 
                       onChange={inputEvent}
                       value={fullName.fName}
                    />
                    <input 
                       type="text"
                       placeholder="Enter Your Last Name"
                       name="lName"
                       onChange={inputEvent}
                       value={fullName.lname}
                    />
                </div>
                <button>Submit now</button> 
              </form>
          </div>

        </>
    );
}

export default Form;
