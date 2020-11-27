import  React from 'react';
import SlotMachine from './SlotMachine'




const App = () => {
    return (
        <>
          <h1> 🎰 Welcome TO Slot Machine 
          <span style= { {fontWeight: ''}}> 🎰</span></h1>
          <SlotMachine x='😄' y='😄' z='😄'/>
          <SlotMachine x='🍎' y='🍌' z='🍊' />
          <SlotMachine x='😄' y='😄' z='😄'/>
        </>
       
    )
}


export default App;