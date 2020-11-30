import React,{useState} from 'react';


const LoginWithThreeDots = () => {
   
    const[fullName, setFullName] = useState({
        fName: '',
        lname: '',
        email: '',
        phone: '',

    });

    
    const inputEvent = (event) => {
        const {value,name} = event.target;
        setFullName((preval) => {
             return {
                 ...preval,
                 [name]: value,
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

export default LoginWithThreeDots;