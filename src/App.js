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
        {items.map((itemvalue) => {
            return <ToDoLists text={itemvalue}/>
          })
        }
          
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
