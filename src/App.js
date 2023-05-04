import logo from './logo.svg';
import './App.css';
import ExploreLocation from './Exploring';
import { useState } from 'react';
// import axios library for making HTTP requests
import axios from 'axios';
import { Container, Row, Col, Card, CardImg } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  // Create state variables to manage location data and image

  const [Location, setLocation] = useState('')
  const [locationData, setLocationData] = useState(null);
  const [image, setImage] = useState('')
  const [error, setError] = useState('');



  // Define function to handle city search event
  const CitySearch = async (event) => {

    // preventing my form from refreshing the page
    event.preventDefault()

    // This is checking if the location input is empty
    if (!Location) {
      setError('Please enter a valid location');
      setLocationData(null);
      setImage('');
      return;
    }


    try {
      // Make API call to locationiq.com
      const API = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KristianKey}&q=${Location}&format=json`);


      // Object deconstructing: the display_name, lat, and lon properties are being assigned to variables with the same names as the properties.
      const { display_name, lat, lon } = API.data[0];

      // Update locationData state variable
      setLocationData({ displayName: display_name, latitude: lat, longitude: lon });
      console.log(API)

      // Generate URL for map image using location data
      let imageUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KristianKey}&center=${lat},${lon}&format=jpg&zoom=9`
      setImage(imageUrl)

      // Clear error state variable if no error occurs
      setError('');
    } catch (error) {
      setError('Place not found. Enter valid Location.')
      setLocationData(null)
      setImage('')
    }


  }
  // create a function to update the Location state variable when the user types in the input field
  const getLocation = (e) => {
    setLocation(e.target.value);
  }

  // render the App component with the ExploreLocation component as a child
  return (

    <div className="App">
      <h1>Where the Flock Are You?</h1>
      <ExploreLocation onCity={CitySearch} setLocate={getLocation} setData={setLocationData} />



      {locationData && (
        <>
          <Card>
            <Card.Body>

              <Card.Title>{locationData.displayName}</Card.Title>
              <Card.Text> <p>Latitude: {locationData.latitude}</p>
                <p>Longitude: {locationData.longitude}</p></Card.Text>
              <img src={image} />
            </Card.Body>
          </Card>
        </>

      )}

      {/* Render error message if error state variable exists */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {/* <h1>{Location.display_name}</h1>
      <p>{locationData.displayName}</p>  
      <p>{locationData.latitude}</p> 
      <p>{locationData.longitude}</p>     */}
      {/* {locationData && locationData.displayName ? locationData.latitude && locationData.longitude} */}
      {/* <p>{locationData}</p> */}
    </div>
  );
}

export default App;
