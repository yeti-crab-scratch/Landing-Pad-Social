import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"



//class App extends Component {
export default function EventBox ({
    info,
    onComment,
    onSignUp,
}){
    
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
              <h2>Max Number of Participants: {info.num_participants}</h2>
              <h2>comments</h2>
              <h2>Already Signed up: {info.num_participants}</h2>
              <button onClick={() => {
                  onComment(alert('hello'))
              }}>Sign Up</button>
              {/* {/* <button onClick={() => {
                  onSignUp(data)
              })>sign up</button> */}
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
    