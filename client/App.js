import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"


class App extends Component {

    

    render() {

    // fetch("http://localhost:3000/")
    //     .then(response => response.json())
    //     .then(response => console.log(response));


        return (
            <div>
                
                <h1>Hello world!</h1>  
                <nav id = "nav">
                
                <Link to="/home">Home</Link> |{" "}
                <Link to="/createEvent">Create Event</Link>
                </nav>
                {/* persisting */}
                <Outlet/>
            </div>
        )
    }
}

export default App;