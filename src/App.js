import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {
const[inputList, setInputList] = useState("Apple");
const[items, setItems] = useState([]);
const itemEvent = (event) => {
setInputList(event.target.value);
};
const listOfItems = () =>{
  setItems((oldItems) => {
    return[...oldItems, inputList];
  });
  setInputList("");
}
const deleteItems = (id) => {
  console.log("deleted");
  setItems((oldItems) =>{
    return oldItems.filter((arrElem, index) =>{

      return index !== id;
    })
  })
}
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text"  placeholder="Add a item" 
        value = {inputList}
        onChange={itemEvent}/> 
        <button onClick={listOfItems}> + </button>

        <ol>
        {items.map((itemvalue, index) => {
            return <ToDoLists 
            key={index}
            id={index}
            text={itemvalue}
            onSelect={deleteItems}
            />
          })
        }
          
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
