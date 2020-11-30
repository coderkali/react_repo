import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './form'
import LoginForm from './loginform'
import LoginWithThreeDots from './loginform';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form/> */}
    {/* <LoginForm/> */}
    <LoginWithThreeDots/>
  </React.StrictMode>,
  document.getElementById('root')
);


const fullName = ['Kali','Prasad'];

const profile = [1,...fullName, 29, 'Male'];

console.log(fullName);
console.log(profile);





var games1 = ['call of duty', 'far cry']
var games2 = ['need of speed','burnout','GTA5']

var games = [...games1,...games2];
console.log(games);

var [first, ...remaining] = games2;
console.log(first);
console.log(remaining);



const fullNames = {
  fName: 'Kali',
  lName: 'Prasad'
}

const profiles ={
  id: 1,
  ...fullNames,
  age: 29,
  gender: 'Male'

}

console.log(profiles);








