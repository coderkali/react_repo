import React from 'react';
import Matching from './Matching'




const SlotMachine = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;


    if( x===y && y===z){
        return (
            <>
              <div>
                  <h1> {x} {y} {z} </h1>
                  <h1> This is Matching </h1>
              </div>
            </>
        );
        //return (<Matching first=this. second='props.y' third='props.z' />);
    }else{
        return (
            <>
              <div>
                  <h1> {x} {y} {z} </h1>
                  <h1> This is Not Matching </h1>
              </div>
            </>
        );
    }


}


export default SlotMachine;