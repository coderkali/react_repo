import { useEffect, useState } from "react";


function App() {
   const [num,setNum] = useState(0);
   useEffect( () => {
     document.title = `you clicked me ${num} times`
   })


  return <button onClick = { () => {
    setNum(num+1);
  }
  }>Click Me {num}</button>
}

export default App;
