import { Card } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap";



function WeatherDay(props) {
    const { date, description } = props;
  
    return (
      <Card className="cardtwo">
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Text>Weather: {description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }




function ForcastData(props) {


    const { data } = props;

    return (
        <div>
            {data.map((day, index) => (
                // <Card key={index} className='cardtwo'>
                //     <Card.Body>
                //         <Card.Title >{day.date}</Card.Title>
                //         <Card.Text>
                //             Weather: {day.description}
                //         </Card.Text>
                //     </Card.Body>
                // </Card>
                <WeatherDay
                key = {index}
                date ={day.date}
                description={day.description}
                />
            ))}

            

            
        </div>
    )
}

export default ForcastData;