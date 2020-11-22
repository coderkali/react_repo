import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'


const msg = "This Is React Js First App";
const fname ="Kali";
const lname ="Prasad";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/200/300"
const img3 = "https://picsum.photos/200/300"

const links = "https://google.com"


const heading = {
    color: '#fa9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '70px 0',
    fontFamily: '"Josefin Sans", sans-serif'
}


ReactDOM.render(
   <React.Fragment> 
       {/* <h1 class="heading">My Name is {fname} {lname}</h1> */}
       <h1 style={heading}>My Name is {fname} {lname}</h1>
       <h1>My Name is {fname+ " "+lname}</h1>
       <h1>My Name is {` ${fname} ${lname}`}</h1>
       <h1>Current Date is  {currentDate}</h1>
       <h1>Current Time is  {currentTime}</h1>
       <h1 contentEditable="true">Hello World!</h1>
       
       <div className="img_div">
         <img src={img3} alt="just img"/>
         <img src={img1} alt="just img"/>
         <img src={img2} alt="just img"/>
         <a href ={links} target="_target">
            <img src={img3} alt="just img"/>
         </a>
       </div>
       
       
       <h2>{msg}</h2>
       <p>2+ 3 is {2+3}</p>
       <p>My Lucky Number is {Math.random()}</p>
    </React.Fragment>,

    //  <div>
    // <h1>Hello World!</h1>
    // <h2>Hello World!</h2>
    // </div>,

    // [
    // <h1>Hello World!</h1>,
    // <h2>Hello World!</h2>
    // ],
    document.getElementById('root'));


// var h1 = document.createElement('h1');
// h1.innerHTML ='Hello World!';
// document.getElementById('root').appendChild(h1);