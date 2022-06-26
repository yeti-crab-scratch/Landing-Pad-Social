import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import EventBox from "./EventBox"
import { useState } from 'react';
import { getData } from "./fakedata";

const array = [0,1,2,3,4,5]
const data = getData();


export default function MainContainer (){
    const info = data;
     const [eventBox, setEventBox] = useState(data[0]);
     const eventBoxFeed = data.map(el => 
            <EventBox 
                // onComment={}
                key={el.name}
                info={el} />
            )
        return (
            <div className='mainContainer'>
              <h2>Search Bar</h2>
              <ul>{eventBoxFeed}</ul>
            </div>
        )
    }