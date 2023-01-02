import { useState } from 'react';
import './App.css';
import countryData from "./resources/countryData.json"

function App() {
  const [country, setCountry] = useState("");

  function HandleChange(e) {
    setCountry(e.target.value);
  }

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
      console.log("clicked")
      document.querySelector(".auto-container").style.display = "none"
    } else {
      document.querySelector(".auto-container").style.display = "block"
    }
  })

  return (
    <div className="App">
      <h1>Search</h1>
      <input type="text" placeholder='Country' onChange={HandleChange}></input>
      <button>Search</button>
      <div className='auto-container'>
        {countryData.map(function(c) {
          if(c.name.toLowerCase().slice(0, country.length) === country.toLowerCase()){
            console.log(c.name)
            if(country != ""){
              return <li onClick={() => document.querySelector("input").value = c.name}>{c.name}</li>
            }
          }
        })}
      </div>
    </div>
  );
}

export default App;
