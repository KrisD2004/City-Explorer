import { Card } from "react-bootstrap";
import React from "react";

function ForcastData(props) {


    const { data } = props;

    return (
        <div>
            {data.map((day, index) => (
                <Card key={index} className='cardtwo'>
                    <Card.Body>
                        <Card.Title >{day.date}</Card.Title>
                        <Card.Text>
                            {/* <p>Temperature: {day.temperature}</p>
                            <p>Humidity: {day.humidity}</p> */}
                            Weather: {day.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default ForcastData;