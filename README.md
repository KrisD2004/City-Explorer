# City explorer

**Author**: Krisitan Dotson
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

The application serves the purpose of providing users with an intuitive interface to easily access information about different cities, such as their geographic coordinates, in a visually appealing and interactive manner. This application can be useful in various scenarios, such as planning trips, finding nearby attractions, or simply gaining general knowledge about different cities. By utilizing the LocationIQ API, the application retrieves the necessary data for each city based on the user's input, enabling users to explore and obtain details about various cities quickly.

## Getting Started

To set up the development environment for this project, you first need to make sure that Node.js is installed on your computer. If you don't have it already, you can download it from the official Node.js website. Next, you should install a code editor or IDE such as Visual Studio Code, Atom, or WebStorm.

Once you have a development environment set up, you can create a new React project using Create React App. In the terminal, navigate to the directory where you want to create your project and run the command "npx create-react-app my-app". This will create a new directory named my-app with the basic structure and configuration files for a React project.

After creating the project, you should replace the default src/App.js and src/ExploreForm.js files with the code provided. You also need to install two additional dependencies, react-bootstrap and axios, by running the command "npm install react-bootstrap axios" in the project directory.

The application uses two APIs, LocationIQ and Mapbox, so you need to obtain API keys from both services. Sign up for a free account on LocationIQ and Mapbox and replace the placeholder API keys in the App.js file with your own.

When you have everything set up and configured, you can start the development server by running "npm start" in the terminal. This will launch the application on a local development server, and you can access it in your web browser at <http://localhost:3000>.

It's important to handle the security of your API keys properly, especially if you plan to deploy the application to a public environment. Be sure to avoid committing your API keys to version control systems and consider using environment variables or other secure methods to manage your API keys.

## Architecture

I used React, a popular JavaScript library for building user interfaces. To create responsive and visually appealing UI elements, the application uses React Bootstrap, which provides pre-designed components and styles.
The application's components include:

* App: The main component that manages the state variables for city information, user input, map display, and error messages. It renders the header, navigation links, ExploreForm component, and a Card component to display the city information and map image.

* ExploreForm: A component that displays a form for users to input a city name. It includes an input field and a button for triggering the retrieval of city data. This component handles making API requests and communicates with the App component to update the state.

* Card: A component from React Bootstrap that is used to display the city information and map image in a visually pleasing way.

## Change Log

1. Location and Coordinates:

* Start time: 05-01-2023 12 pm
* Finish time: 05-01-2023 4 pm
* Actual time needed: 5 hours
* Changes made:
Created the App component and initialized state variables for cityInfo and input using the useState hook.
Added my exploring component to handle user input and make API requests to retrieve city data and also added a form
Displayed the city information ,which is latitude, longitude, and display name, based on the data recieved.

2. Adding Map :

* Start time: 05-03-2023 9 am
* Finish time: 05-03-2023 1 pm
* Actual time needed: 5 hours
* Changes made:
Added a code to generate the map image for when i entered in a valid location.

3. Adding error catching:

* Start time: 05-03-2023 5pm
* Finish time: 05-03-2023 7 pm
* Actual time needed: 2 hours
* Changes made:
* I Added a error handling to catch and display any errors that occur during API requests.
* I added an if statement for the error

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

Name of feature: _______**Location and Coordinates**_____________________

Estimate of time needed to complete: __3 hours___

Start time: __12 pm ___

Finish time: __4 pm ___

Actual time needed to complete: _5 hours____

Name of feature: ____________**Map**________________

Estimate of time needed to complete: _3 hours____

Start time: __9 am___

Finish time: __1 pm___

Actual time needed to complete: ___5__

Name of feature: ________**Error Catching**____________________

Estimate of time needed to complete: ___2 hours__

Start time: __5 pm___

Finish time: __7 pm___

Actual time needed to complete: _2 hours____


## Name of feature: Location and Coordinates

Estimate of time needed to complete: 1 day

Start time: 7pm

Finish time: 11pm

Actual time needed to complete: 3 and a half hours


## Name of feature: Map

Estimate of time needed to complete: 1 day

Start time: 1:00pm

Finish time: 3pm

Actual time needed to complete: 2 hours

## Name of feature: Error Catching

Estimate of time needed to complete: 1 day

Start time: 11:30am

Actual time needed to complete: __2___

