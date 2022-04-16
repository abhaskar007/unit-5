import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div id='container'>
      <div id="box">
        <div id='logo'>
        <div><b>LOGOBAKERY</b></div>
        <div id='mid_element'>
          <p>service</p>
          <p>project</p>
          <p>About</p>
        </div>
        <div>
          <button>Button</button>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default App
