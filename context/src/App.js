import { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();



function App() {
   return (
     <>
      <FirstName.Provider value= {"Kali"} > 
         <LastName.Provider value= {"Prasad"}>
             <CompA/>
         </LastName.Provider>
         
      </FirstName.Provider>
      </>
   );
};

export default App;
export { FirstName, LastName };
