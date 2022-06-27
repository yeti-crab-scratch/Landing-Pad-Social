import React from 'react';
import { useState } from 'react';



export default function createEvent() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [activity_type, setActivity_type] = useState('');
  const [numParticipants, setNumParticipants] = useState('');
  const [zip, setZip] = useState('');


    return(
    <main>
        <div id = "eventContainer">
         <h1>Create Event Page</h1>
         <label>Event title: &nbsp;</label> 
         <input onChange = {e => setTitle(e.target.value)} />
      <div>
       <label id = "eventFields">Date: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setDate(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Time Start: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setTimeStart(e.target.value)} />

       <label id = "eventFields">Time End: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setTimeEnd(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Activity Type: &nbsp;</label> 
       <input id = "eventFields" placeholder='Drop down menu?' onChange = {e => setActivity_type(e.target.value)} />
      </div>
      <div>
       <label id = "eventFields">Max number participants: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setNumParticipants(e.target.value)} />
      </div>



      </div>
    </main>
    )
};
