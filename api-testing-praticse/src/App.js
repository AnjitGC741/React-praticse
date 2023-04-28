import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [jokes,getJokes] = useState([]);
  const fetchJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => response.json())
      .then((data) => getJokes(data));
  };
  
  useEffect(() => {
    fetchJokes();
  }, []);
  return (
    <div>
      <p>{jokes?.setup}</p>
      <p>{jokes?.delivery}</p>
      <button onClick={fetchJokes}>Another one</button>
    </div>
  );
}

export default App;
