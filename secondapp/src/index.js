import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let curDate = new Date(2020,11,22,2);
curDate = curDate.getHours();
let greeting ="";
const cssStyle = { 
    
}

if(curDate>= 1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color ='green';
}else if(curDate>= 12 && curDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color ='orange';
}else{
  greeting = "Good Nights"
  cssStyle.color ='black';
}


ReactDOM.render(
  <React.StrictMode>
    <h1 >Heelo , <span style={cssStyle}>{greeting}</span></h1>    
  </React.StrictMode>,
  document.getElementById('root')
);
