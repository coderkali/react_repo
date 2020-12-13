import { useEffect, useState } from "react";


function App() {
  const [num,setNum] = useState(0); 

  useEffect(() => {
    alert("I am Clicked");
  })

  return (
    <button onClick={() => {setNum(num+1)}}>Click me {num}</button>
  )
}

export default App;
