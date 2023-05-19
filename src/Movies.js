import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import { Modal, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';



function MovieItem({ movie }) {
    return (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }




function Movie(props) {


    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    function searchMovie() {
        const MovieApi = "63c34b8a26182e7318d549b0a065285f";
        const UrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${MovieApi}&query=${searchQuery}`;

        axios
            .get(UrlMovie)
            .then(response => {
                const cityMovie = response.data.results;
                setMovies(cityMovie);
            })
            .catch(error => {
                console.error(error);
                // Handle error appropriately
            });
    }





    return (
        <div>

            <Form>
                <Form.Control value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)} />
            </Form>
            <Button onClick={() => {
                setShowModal(true)
                searchMovie();
            }}>Show Movie</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>

                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {movies.map((movie) => (
                        <MovieItem movie={movie}/>
                        // <div key={movie.id}>
                            
                        //     <h3>{movie.title}</h3>
                        //     <p>{movie.overview}</p>
                        // </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Movie;