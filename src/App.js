import React from 'react';

const App = () => {
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text"  placeholder="Add a item" />
        <button> + </button>

        <ol>
          <li>buy apple</li>
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
