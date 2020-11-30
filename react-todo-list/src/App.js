import React, { useState } from 'react';
import ToDoList from './todolist';

function App() {

   const [inputList, setInputList] = useState('buy apple');
    
   const [Items, setItems] = useState([]);
   
   
   const itemEvent = (event) => {
    setInputList(event.target.value);
   };

   const listOfItem = (event) => {
    setItems((oldItems) => {
      return [...oldItems,inputList];
    })
    setInputList('');
    
   }

   const deleteItem = (id) => {
      console.log("deleted");
      setItems((oldItems) => {
        return oldItems.filter((arrElement, index) => {
            return index !== id;
        })
      })
  }





  return (
     <>
       <div className="main_div">
          <div className="center_div">
            <br/>
            <h1> ToDO List</h1>
            <br/>
            <input type="text" 
            placeholder="Add a Items"
            value = {inputList}
            onChange={itemEvent}

            />
            <button onClick={listOfItem}>+ </button>
            <ol>
              
             { Items.map((itemVal, index) => {
                return <ToDoList
                   key = {index}
                   id = {index}
                   text = {itemVal}
                   onSelect = {deleteItem}
                 />
              }) };
            </ol>
          </div>
       </div>
     </>
  );
}

export default App;
