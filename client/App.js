import React from 'react';
import { Outlet, Link } from "react-router-dom"



//class App extends Component {
export default function App (){
    
    //render() {

    // fetch("http://localhost:3000/")
    //     .then(response => response.json())
    //     .then(response => console.log(response));
    return(
        <div>
            <h1>Landing Pad</h1>  
            
            <nav id = "nav">
                <Link id = "navText" to="/">Home</Link> |{" "}
                <Link id = "navText" to="/createEvent">Create Event</Link> |{" "}
                <Link id = "navText" to="/profile">My Profile</Link>
                <Link id = "navSignup" to="/signup">Sign up!</Link>
            </nav>
            {/* <div>
                <MainContainer/>
            </div> */}
            {/* persisting */}
            <Outlet id = "eventContainer"/>
            
        </div>
        
)

}

    
    //         <div>
    //             <h1>Hello world!</h1>  
    //             <nav id = "nav">
    //             <Link to="/home">Home</Link> |{" "}
    //             <Link to="/createEvent">Create Event</Link>
    //             </nav>
    //             {/* persisting */}
    //             <Outlet/>
    //             <div>
    //             <MainContainer/>
    //             </div>
    //         </div>
    //     )
    // }
//}

//export default App;
