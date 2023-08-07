/**
 * The main component of the React application.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const addItem = () => {
    setItems([...items, 'Item ' + (items.length + 1)]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </header>
    </div>
  );
}

export default App;
