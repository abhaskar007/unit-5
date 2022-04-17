// import logo from './logo.svg'
import { useState } from "react";
import { Category } from "../../components/category";
import "./App.css";

function App() {
  //  const Navbar = [
  //    {image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",title: "Top Offer"},
  //  {image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",title: "Grocery"},
  //  {image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",title: "Mobile"},
  //  {image: "https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",title: "Fashion"},
  //  {image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",title: "Electronics"},
  //  {image: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",title: "Home"},
  //  {image: "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",title: "Appliance"},
  // ];
  const [counter, setCounter] = useState(1);
  const handleAdd = (value) => {
    // if (counter >= 10 && counter<=0) {
    //   return;
    // }
    setCounter(counter + value);
  };
  if(counter>10)
  {
    return `this is the max value`
  }
  // const handlesubtract = () => {
  //   if (counter <= 0) {
  //     return;
  //   }
  //   setCounter(counter - 1);
  // };

  return (
    <div className="App">
      {/* {Navbar.map(el => <Category image={el.image}label={el.title}/>)} */}
      <h3>counter: {counter}</h3>
      <button onClick={() => {handleAdd(1)}}> ADD </button>
      <button onClick={() => handleAdd(-1)}>Remove</button>
      <h1>Number is {counter % 2 === 0 ? "even" : "odd"} </h1>
    </div>
  );
}

export default App;
