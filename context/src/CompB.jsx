import React, { useContext } from 'react';
import { FirstName, LastName } from './App';

const CompB = () => {
    const fname =useContext(FirstName);
    const lName =useContext(LastName);
    return <h1> My Name is {fname} {lName}</h1>;
      
}


export default CompB;