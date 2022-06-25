import React, { Component } from 'react';

class App extends Component {

    

    render() {

    fetch("http://localhost:3000/")
        .then(response => response.json())
        .then(response => console.log(response));


        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        )
    }
}

export default App;