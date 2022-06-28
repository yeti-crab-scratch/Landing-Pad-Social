import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function createEvent() {
  const [nameX, setName] = useState('');
  const [titleX, setTitle] = useState('');
  const [dateX, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [activityType, setActivity_type] = useState('');
  const [numParticipants, setNumParticipants] = useState('');
  const [locationX, setLocation] = useState('');

  //show participants
  //sign up button - input name - add participant list - add to array
  

function handleSubmit () {

  const obj = {
    title: titleX,
    date: dateX,
    start_time: timeStart,
    end_time: timeEnd,
    activity_type: activityType,
    num_participants: numParticipants,
    participants:nameX,
    location: locationX
  }


  fetch('http://localhost:3000/createEvent', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
      // x-www-form-urlencoded
  },

    body: JSON.stringify(obj),
    
  })
  .then(response => response.json())
  // .then(useNavigate("/success"))
  .catch(console.log("Error in fetch POST to /createEvent"))
  
  console.log(obj);

}

//UPDATE events SET date = '2022-06-26', start_time = '010:00', end_time = '012:00', activity_type = 'Basketball', num_participants = 10, zip = 96813 WHERE id = 1

    return(
    <main>
      <div id = "eventContainer">
         <h1>Create Event Page</h1>
         <label id = "eventFields">Host name: &nbsp;</label> 
         <input id = "eventFields" onChange = {e => setName(e.target.value)} />
      <div>
        <label id="eventFields">Event title: &nbsp;</label> 
        <input id = "eventFields" onChange = {e => setTitle(e.target.value)} />
      </div>
      <div>
        <label id="eventFields">Location: &nbsp;</label> 
        <input id = "eventFields" onChange = {e => setLocation(e.target.value)} />
      </div>

      <div>
       <label id = "eventFields">Date: &nbsp;</label> 
       <input id = "eventFields" placeholder='YYYY-MM-DD' onChange = {e => setDate(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Time Start: &nbsp;</label> 
       <input id = "eventFields" placeholder='E.g. 13:00' onChange = {e => setTimeStart(e.target.value)} />

       <label id = "eventFields">Time End: &nbsp;</label> 
       <input id = "eventFields" placeholder='E.g. 15:00' onChange = {e => setTimeEnd(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Activity Type: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setActivity_type(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Max number participants: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setNumParticipants(e.target.value)} />
      </div>
      <div>
       <button id = "submitButton" onClick = {() => { alert("Successfully submitted")
       handleSubmit()}}>Submit Event!</button>
      </div>
      </div>
    </main>
    )
};
