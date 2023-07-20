import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(0);

  function getJoke() {
    try {
      fetch('https://v2.jokeapi.dev/joke/Any').then(
        response => response.json()
      ).then(
        (joke) => {
          console.log(joke);
          setData(joke);
        }
      )
    } catch (e) {
      console.log(e)
    }
  }
  if (data.type === 'single') {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>{data.joke}</h3>
          <button onClick={ getJoke }> Get Joke </button>
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{data.setup}</h3>
        <h3>{data.delivery}</h3>
        <button onClick={ getJoke }> Get Joke </button>
      </header>
    </div>
  );
  
}

export default App;
