import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import MainContainer from './MainContainer';

//class App extends Component {
export default function App (){
    

    //render() {

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
                <div>
                <MainContainer/>
                </div>
            </div>
        )
    }
//}

//export default App;