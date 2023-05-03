import React from "react";
import { FormGroup, Form, Button, FormLabel, FormText } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function ExploreLocation(props) {
    // render a form component with a form group containing a form control input field and a form text component to display the location
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control onInput={props.setLocate}/>
        <Form.Text onInput={props.setLocate} className="text-muted">
         {/* {props.Location} {props.setData}   */}
         {/* {props.locationData && `${props.locationData.displayName} (${props.locationData.latitude}, ${props.locationData.longitude})`} */}

        </Form.Text>
      </Form.Group>
      <Button onClick={props.onCity} variant="primary" type="submit">
        Explore!
      </Button>
    </Form>
    
  );
}

export default ExploreLocation;
