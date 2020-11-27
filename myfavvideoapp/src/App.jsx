import React from "react";
import Card from "./Cards"
import Sdata from './Sdata'



const App = () => ((
    <>
       <h1 className>
        List Of Top 5 Netflix 
      </h1>

      {Sdata.map((values) => {
      return (
        <Card 
          key = {values.id}
          imgsrc={values.imgsrc}
          title={values.title}
          sname={values.sname}
          link={values.link} 
         />
      );
    })}



    </>
));

export default App;

