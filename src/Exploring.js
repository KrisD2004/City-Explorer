import React from "react";
import { FormGroup, Form, Button, FormLabel, FormText } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function ExploreLocation(props) {
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control/>
        <Form.Text className="text-muted">
         {props.Location}
        </Form.Text>
      </Form.Group>
      <Button onClick={props.onCity}variant="primary" type="submit">
        Explore!
      </Button>
    </Form>
    // <Form>
    //   <FormGroup>
    //     <FormLabel></FormLabel>
    //     <FormText>
    //         {props.Location}
    //       </FormText>
    //   </FormGroup>
    //   <Button  onClick={props.onCity} variant="primary" type="submit"> Explore!</Button>
    // </Form>
  );
}

export default ExploreLocation;
