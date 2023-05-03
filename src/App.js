import logo from './logo.svg';
import './App.css';
import ExploreLocation from './Exploring';
import { useState } from 'react';
// import axios library for making HTTP requests
import axios from 'axios';

function App() {

// create a state variable called Location and a function to update it
  const [Location, setLocation]= useState('')
  const [locationData, setLocationData] = useState(null);


// create an asynchronous function to handle the city search event
  const CitySearch = async (event) => {
     
    event.preventDefault()

    
    const API = await axios.get( `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KristianKey}&q=${Location}`);
 
    //  console.log(API.data[0].display_name);

      const { display_name, lat, lon } = API.data[0];
      // setLocationData(display_name,lattitude,longitude)
      setLocationData({ displayName: display_name, latitude: lat, longitude: lon });
      console.log(API)



  }
   // create a function to update the Location state variable when the user types in the input field
  const getLocation = (e) => {
    setLocation(e.target.value);
  }

 // render the App component with the ExploreLocation component as a child
  return (
    <div className="App">
       <ExploreLocation onCity = {CitySearch}  setLocate = {getLocation}  setData = {setLocationData}/>
        {/* <h1>{Location}</h1>
        <p>{locationData}</p> */}
    </div>
  );
}

export default App;
 