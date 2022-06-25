import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import EventBox from "./EventBox"
import { useState } from 'react';
import { getData } from "./fakedata";

const array = [0,1,2,3,4,5]
const data = getData();

export default function MainContainer (){
     const [eventBox, setEventBox] = useState(data[0]);
     const eventBoxFeed = array.map(el => 
        <li key={array.id} className="eventBox">
            <h2>Hey</h2>
            
        </li>
            )
        return (
            <div className='mainContainer'>
              <h2>Search Bar</h2>
              <ul>{eventBoxFeed}</ul>
            </div>
        )
    }