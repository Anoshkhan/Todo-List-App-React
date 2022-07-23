import React, { useState } from 'react';

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
}
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text"  placeholder="Add a item" onChange={itemEvent}/> 
        <button onClick={listOfItems}> + </button>

        <ol>
        {items.map((itemvalue) => {
            return <li>{itemvalue}</li>;
          })
        }
          
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
