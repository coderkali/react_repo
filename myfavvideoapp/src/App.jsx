import React from "react";
// import Card from "./Cards"
// import Sdata from './Sdata'
import Netflix from './netflix';
import Amazon from './Amazon';

const favourites = 'Netflix'

const Favs = () => {
    if(favourites === 'Netflix'){
        // return (
        //     <Card 
        //     key = {Sdata[1].id}
        //     imgsrc={Sdata[1].imgsrc}
        //     title={Sdata[1].title}
        //     sname={Sdata[1].sname}
        //     link={Sdata[1].link} 
        //    />
        // );
        return <Netflix/>;

    }else{
        return (
            <Amazon/>
        );

    }
}




const App = () => ((
    <>
       <h1 className>
        List Of Top 5 Netflix 
      </h1>

      {/* {Sdata.map((values) => {
      return (
        <Card 
          key = {values.id}
          imgsrc={values.imgsrc}
          title={values.title}
          sname={values.sname}
          link={values.link} 
         />
      );
    })} */}


     {/* This is for If Else Condition */}
    {/* <Favs/> */}

    { (favourites === 'Netflix') ?  <Netflix/> :  <Amazon/> }



    </>
));

export default App;

