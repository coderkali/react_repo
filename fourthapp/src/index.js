import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as appData from './App';
import  Calculation from './App'

//import youtuber, {favProg, myName, myNames} from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* <ol>
      <li>Kali Prasad</li>
      <li>{appData.default}</li>
      <li>{appData.favProg}</li>
      <li>{appData.myNames()}</li>
      <li>{appData.myName()}</li>
    </ol> */}

     <Calculation/>
    

  </React.StrictMode>,
  document.getElementById('root')
);
