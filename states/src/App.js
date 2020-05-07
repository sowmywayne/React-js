import React, {useState} from 'react'
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Counter app using State</h1>
      </header>
  <h2>Current value of counter is {count}</h2>
    <button onClick={() => setCount(0)}>Reset</button>
    <button onClick={() => count > 10 ? "": setCount(count + 1)}>Increase</button>
    <button onClick={() => count <= 0 ? "": setCount(count - 1)}>decrease</button>

    </div>
  )
}


export default App;