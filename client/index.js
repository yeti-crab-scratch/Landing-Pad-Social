import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './style.scss';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Profile from "./routes/profile.jsx";
import CreateEvent from "./routes/createEvent.jsx";
import Signup from "./components/Signup.jsx";
import MainContainer from './MainContainer';

//imports for redux below;
import { Provider } from 'react-redux'
import store from './store.js'

//upgrade for react 18
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<Provider store={store}>
<BrowserRouter>
    <Routes>
            <Route path = "/" element = {<App/>}>
                <Route path = "/" element = {<MainContainer/>}/>
                <Route path = "createEvent" element = {<CreateEvent/>}/>
                <Route path = "Profile" element = {<Profile/>}/>
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                     <p>There's nothing here!</p>
                    </main>
                 } /* no match case */
             />
             </Route>
             <Route path = "Signup" element = {<Signup/>}/>
    </Routes>
</BrowserRouter>
</Provider>);

//nest routes to persist - add Outlet in app.js