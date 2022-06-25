import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"


//class App extends Component {
export default function EventBox ({
    data,
    onComment,
    onSignUp,
}){
    
        return (
            <div className='eventBox'>
              <h2>Host</h2>
              <h2>Date: {data.date}</h2>
              <h2>Activity: {data.activity_type}</h2>
              <h2>Start: {data.start_time}</h2>
              <h2>End: {data.end_time}</h2>
              <h2>comments</h2>
              <h2>Already Singed up: {data.num_participants}</h2>
              <button onClick={() => {
                  onComment(data)
              }}>comment</button>
              {/* <button onClick={() => {
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
    