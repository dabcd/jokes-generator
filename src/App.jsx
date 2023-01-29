import { useEffect, useRef, useState } from "react";
import fetchJoke from "./fetchJoke";
import "./App.css";

function App() {
  const name = useRef(null);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke().then((res) => setJoke(res));
  }, []);

  const submitQuery = (event) => {
    event.preventDefault();
    fetchJoke(name.current.value).then((res) => setJoke(res));
  };

  return (
    <div className="App">
      <h1>Chuck Norris jokes generator 😄</h1>
      <h3>Change the name if you like:</h3>
      <form onSubmit={submitQuery}>
        <input type="text" placeholder="Your Name" ref={name} />
        <input type="submit" value="Generate a joke!" />
      </form>
      <h2>{joke}</h2>
    </div>
  );
}

export default App;
