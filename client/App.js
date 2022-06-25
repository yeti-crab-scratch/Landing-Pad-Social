import React from 'react';
import { Outlet, Link } from "react-router-dom"


// class App extends Component {
// }

// export default App;


export default function app() {

    return( 

    // fetch("http://localhost:3000/")
    //     .then(response => response.json())
    //     .then(response => console.log(response));
    
            <div>
                <h1>Landing Pad</h1>  
                <nav id = "nav">
                    <Link id = "navText" to="/">Home</Link> |{" "}
                    <Link id = "navText" to="/createEvent">Create Event</Link> |{" "}
                    <Link id = "navText" to="/profile">My Profile</Link>
                    <Link id = "navSignup" to="/signup">Sign up!</Link>
                </nav>
                {/* persisting */}
                <Outlet id = "eventContainer"/>
                <div>
            
            </div>
            </div>
    )

    }