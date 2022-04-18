import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import './App.css';
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true);


  return (
    <div className="App">
      <button className="hed3e" onClick={()=>{setShow(!show)}}>Add  New student</button>
    
      {show ? <ShowStudents /> : <AddStudent/> }
     
    </div>
  );
}

export default App;