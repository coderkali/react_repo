import React,{useState} from 'react';


const LoginForm = () => {
   
    const[fullName, setFullName] = useState({
        fName: '',
        lname: '',
        email: '',
        phone: '',

    });

     
    

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        // const value  =  event.target.value;
        // const name = event.target.name;

        const {value,name} = event.target;
        
        setFullName((preval) => {
              if(name === 'fName'){
                return {
                    fName: value,
                    lname: preval.lname,
                    email: preval.email,
                    phone: preval.phone,
                };
              }
             else if(name === 'lName') {
                return {
                    fName: preval.fName,
                    lname: value,
                    email: preval.email,
                    phone: preval.phone,
                };
             } 
             else if(name === 'email') {
                return {
                    fName: preval.fName,
                    lname: preval.lname,
                    email: value,
                    phone: preval.phone,
                };
             } 
             else if(name === 'phone') {
                return {
                    fName: preval.fName,
                    lname: preval.lname,
                    email: preval.email,
                    phone: value,
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
                    <p>{fullName.email} {fullName.phone}</p>
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
                     <input 
                       type="email"
                       placeholder="Enter Your Email Id"
                       name="email"
                       onChange={inputEvent}
                       value={fullName.email}
                    />
                     <input 
                       type="number"
                       placeholder="Enter Your Phone Number"
                       name="phone"
                       onChange={inputEvent}
                       value={fullName.phone}
                    />
                </div>
                <button>Submit now</button> 
              </form>
          </div>

        </>
    );
}

export default LoginForm;