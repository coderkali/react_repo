import React from 'react';





function Message(){
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
    return <h1 >Heelo , <span style={cssStyle}>{greeting}</span></h1> ;
}


export default Message;

