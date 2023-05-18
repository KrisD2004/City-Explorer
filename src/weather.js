import { Card } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap";


function ForcastData(props) {


    const { data } = props;

    return (
        <div>
            {data.map((day, index) => (
                <Card key={index} className='cardtwo'>
                    <Card.Body>
                        <Card.Title >{day.date}</Card.Title>
                        <Card.Text>
                            Weather: {day.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}

            

            
        </div>
    )
}

export default ForcastData;