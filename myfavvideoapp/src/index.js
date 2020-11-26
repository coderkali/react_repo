import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Cards"
import Sdata from './Sdata'

// function cards(values,index,arr){
//    return(
//     <Card imgsrc={values.imgsrc}
//     title={values.title}
//     sname={values.sname}
//     link={values.link} 
//  />
//    );
// }



ReactDOM.render(
  <React.StrictMode>
      <h1 className>
        List Of Top 5 Netflix 
      </h1>
      {/* <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
         title="A Netflix Original Series" 
         sname="Dark"
         link="https://www.netflix.com/in/title/80990668?source=35" 
             
      />
      <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
         title="A Amazon Original Series" 
         sname="Dark"
         link="https://www.netflix.com/in/title/80990668?source=35" 

         />
      <Card
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
         title="A Sony Original Series" 
         sname="Dark"
         link="https://www.netflix.com/in/title/80990668?source=35" 
      /> */}



      {/* <Card imgsrc={Sdata[0].imgsrc}
         title={Sdata[0].title}
         sname={Sdata[0].sname}
         link={Sdata[0].link} 
             
      />
      <Card imgsrc={Sdata[1].imgsrc}
         title={Sdata[1].title}
         sname={Sdata[1].sname}
         link={Sdata[1].link} 

         />
      <Card
        imgsrc={Sdata[1].imgsrc}
         title={Sdata[1].title}
         sname={Sdata[1].sname}
         link={Sdata[1].link} 
      /> */}


    {/* {Sdata.map(cards)} */}

    {/* {Sdata.map(function cards(values){
       return (
        <Card imgsrc={values.imgsrc}
          title={values.title}
          sname={values.sname}
          link={values.link} 
         />
       );
    })} */}



    {Sdata.map((values) => {
      return (
        <Card imgsrc={values.imgsrc}
          title={values.title}
          sname={values.sname}
          link={values.link} 
         />
      );
    })}
    
  </React.StrictMode>,
  document.getElementById('root')
);

