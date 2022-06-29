import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';


export default function App() {

  const userLoggedIn = true; // TO BE REPLACED BY STATE
  if(userLoggedIn){
    return (
      <div className='app-container' display="flex">
        <Navbar/>
        <h1>Panda Whale</h1>
        <Outlet id="eventContainer" />
      </div>
    );
  } else{
    return <Login/>
  }


  // Put a check in place for whether user is logged in

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

  //render() {

  // fetch("http://localhost:3000/")
  //     .then(response => response.json())
  //     .then(response => console.log(response));
