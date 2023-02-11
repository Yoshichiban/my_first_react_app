import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
/*
Whenever you call something as a function and it starts with "use", in React, we call that a hook.
const [counter, setCounter] = useState(0);

inside brackets
1. name of that state(counter)
2. setter function(setCounter) - rule of thumb to add "set" to the name
provide initial value on parenthesis

Now we can use this counter as a normal JS variable
*/

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
