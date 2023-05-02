import logo from './logo.svg';
import './App.css';
import ExploreLocation from './Exploring';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [Location, setLocation]= useState('')

  const CitySearch = async (event) => {
    event.preventDefault()
    const API = await axios.get( 'https://us1.locationiq.com/v1/search.php?key=pk.7dd36f4d0ae867a7a750660f3731be40&q=' + Location + '&format=json');
     

  }
  const getLocation = (e) => {
    setLocation(e.target.value);
  }
  return (
    <div className="App">
       <ExploreLocation onCity = {CitySearch}  setLocate = {getLocation}/>
        
    </div>
  );
}

export default App;
 