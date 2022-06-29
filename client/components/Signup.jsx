import React from 'react';
import styles from '../styles/login-styles.scss';

const Signup = (props) => {
  return (
    <main id="signupMainContainer">
     <h1>Sign up</h1>

     <div id='signupContainer'>
        <div>
          <label type='text'>Username: </label>
          <input type='text' placeholder='Type here'/>
        </div>
        <div>
          <label type='text'>Password: </label>
          <input type='password' placeholder='Type here'/>
        </div>
        <div>
          <label type='text'>First Name: </label>
          <input type='password' placeholder='Type here'/>
        </div>
        <div>
          <label type='text'>Last Name: </label>
          <input type='password' placeholder='Type here'/>
        </div>
        <div>
          <label type='text'>E-Mail: </label>
          <input type='password' placeholder='Type here'/>
        </div>
      </div>
    </main>
  )
}

export default Signup



// export default function signUp() {
//   return (
//     <main id="eventContainer">
//       <h1>Sign up</h1>
//     </main>
//   );
// }
