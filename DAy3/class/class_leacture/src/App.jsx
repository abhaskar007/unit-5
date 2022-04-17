// import { useState } from 'react'
// import logo from './logo.svg'
import { Category } from '../../components/category';
import './App.css'

function App() {
 const Navbar = [
   {image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",title: "Top Offer"},
 {image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",title: "Grocery"},
 {image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",title: "Mobile"},
 {image: "https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",title: "Fashion"},
 {image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",title: "Electronics"},
];
  return (
  <div className='nav'>
   {Navbar.map(el => <Category image={el.image}label={el.title}/>)}
    </div>
  )
}

export default App;
