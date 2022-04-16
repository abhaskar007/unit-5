import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(100);

  return (
    <div className="App">
      <div>
        <ul>
          <b>Mobile Operating System</b>
        </ul>
        <li>Android</li>
        <li>BlackBerry</li>
        <li>iphone</li>
        <li>Window</li>
        <ul>
          <b>Mobile Manufacturers</b>
        </ul>
        <li>SamSung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li className="okies">Apple</li>
      </div>
    </div>
  );
}

export default App;
