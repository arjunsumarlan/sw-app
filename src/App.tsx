import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() =>{
    async function get() {
      const data = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=73b25b0748614b89b24dc491c8081185');
      if (data.ok) {
        console.log('Data fetch: ', await data.json());
      }
    }

    get();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
