import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const[num,setNum] = useState();
  const[name,setName] = useState();
  useEffect(() => {
    async function getData(){
      const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${ num }`);
      console.log(res.data.name);
      setName(res.data.name);
    }
    getData();
  })
  return ( 
    <>
    <h1> You Choose Value {num}</h1>
    <h1> My Name Is  {name}</h1>
    <h1> You Choose Value {num}</h1>
      <select value={num} onChange={ (event) => {
            setNum(event.target.value);
      }}>
         <option value="1">1</option>
         <option value="25">25</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
      </select>
    </>
  );
}

export default App;
