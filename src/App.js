import { Routes, Route, Link} from 'react-router-dom';
import "./app.css"
import {dogs as importedDogs} from './dogs'; // vara kvar för att hämta hundarna till localstorage
import Home from "./Home";
import Profile from "./Profile";
import Created from "./Created";
import Edit from "./Edit";
import { useEffect, useState } from "react";


const Navbar = () => {
  return (
    <div>
      <header> 
          <div className="row">
          <h1 id="icon"> D </h1>
          <h1> DogBook </h1>
      </div>
    </header>
      <Link to="/">Home</Link>
      <Link to="/created">Create new dog</Link>
    </div>
  )
}


function App() {
  //localStorage.setItem("dogs", JSON.stringify(importedDogs)) // vara kvar för att hämta hundarna till localstorage


  const [_, rerender] = useState(null)
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home rerender={rerender}/>}/>
        <Route path="/profile/:id" element={<Profile rerender={rerender}/>} />
        <Route path="/created" element={<Created rerender={rerender}/>} />
        <Route path="/edit/:id" element={<Edit rerender={rerender}/>} />
      </Routes>
    </div>
  )
}


export default App;