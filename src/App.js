import React, { useState , useEffect } from 'react';
import './App.css';
import Message from './Message';
import { FormControl, Input } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
 
function App() {
  
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  
  //console.log(input)
  // useState = variable in REACT
  // useEffect = block of code executed on a condition in REACT
  
  useEffect(() => {
    // run once app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}))
      )})
  }, [])


  useEffect(() => {
    setUsername(prompt('Please enter your Name'))  
  }, [])
  //console.log(username)
  

  const sendMessage = (event) => {
    // the logic to send a message
    event.preventDefault();
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  setInput('');
  }



  return (
    <div className="App">
      <img alt="" src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
      <h1>A Messenger Clone, powered by Firebase!</h1>
      <h2>Welcome {username}</h2>
      
      
      <form className="app__form">
      <FormControl classname="app__formControl">
      <Input className="app__input" placeholder="Enter a Message.." value={input} onChange={event => setInput(event.target.value)}/>
      <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> 
        <SendIcon />
      </IconButton>
      </FormControl>
      </form>


      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>  
    </div>
  );
}

export default App;
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

//On terminal 

firebase login

firebase init

firebase deploy



rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 1, 15);
    }
  }
}
*/


