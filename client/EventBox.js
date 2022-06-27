import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';



//class App extends Component {
export default function EventBox ({
    info,
    onComment,
    onSignUp,
    onViewParticipants,
})
{
    const [nameX, setName] = useState('');

    function handleSubmit() {
    const obj = {name:nameX}
    }


        return (

            <div className='eventBox'>
              {/* <h2>Date: {info.name}</h2>
              <h2>Activity: {info.number}</h2>
              <h2>Start: {info.amount}</h2>
              <h2>End: {info.due}</h2> */}
              
              <h2>Host</h2>
              <h2>Title: {info.title}</h2>
              <h2>Date: {info.date}</h2>
              <h2>Activity: {info.activity_type}</h2>
              <h2>Start: {info.start_time}</h2>
              <h2>End: {info.end_time}</h2>
              <h2>Number of Participants: {info.num_participants}</h2>
              <h2>Already Signed up: {info.num_participants}</h2>
              <button id = 'commentButton' onClick={() => {
                  onComment(alert('hello'))
              }}>Comment</button>
             <button id = 'signupEventButton' onClick={() => {
                  onSignUp(data)
              }}>Sign up for event</button>
              <button id="viewParticipants" onClick = {() => handleSubmit()}>View participants</button>
              <input  placeholder='Enter your name!' onChange = {e => setName(e.target.value)}/>
            </div>
        )
    }

    // CREATE TABLE events (
    //     id SERIAL PRIMARY KEY,
    //     title varchar,
    //     date DATE,
    //     start_time TIME,
    //     end_time TIME,
    //     activity_type varchar,
    //     num_participants int DEFAULT 1,
    //     zip int,
    //     participant_id int,
    //     comment_id int
    // )
    