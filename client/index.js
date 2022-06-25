import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './style.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./routes/home.jsx";
import CreateEvent from "./routes/createEvent.jsx";



ReactDOM.render(
 <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<App/>}>
            <Route path = "home" element = {<Home/>}/>
            <Route path = "createEvent" element = {<CreateEvent/>}/>
            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
                 } /* no match case */
             />
        </Route>
    </Routes>
</BrowserRouter>,

document.getElementById('root')
);

//nest routes to persist - add Outlet in app.js