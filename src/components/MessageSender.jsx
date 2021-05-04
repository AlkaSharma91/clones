import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

const MessageSender = () => {
    const[{user},dispatch]=useStateValue();
    const[input,setInput]=useState('');
    const [imageUrl, setimageUrl] = useState('')
    
     const handleSubmit=(e)=>{
         e.preventDefault();
         db.collection('posts').add({
             message:input,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
             profilePic:user.photoURL,
             username: user.displayName,
             image: imageUrl

         })

         setInput("")
         setimageUrl("")
     }

    return (
        <div className="messageSender">
           <div className="messageSender__top">
           <Avatar src={user.photoURL}/>
           <form action="">
               <input  value={input} onChange={(e)=>setInput(e.target.value)} type="text" className="messageSender__input" placeholder={`whats on your mind ${user.displayName}`}
               />
               <input value={imageUrl} onChange={(e)=>setimageUrl(e.target.value)} type="text" placeholder="image URL (optional)" />
               <button onClick={handleSubmit} type="submit">Hidden Submit</button>
           </form>

           </div>
           <div className="messageSender__bottom">
           <div className="messageSender__option">
               <VideocamIcon style={{color:"red"}}></VideocamIcon>
               <h3>Live Video</h3>
           </div>
           <div className="messageSender__option">
               <PhotoLibraryIcon style={{color:"green"}}/>
               <h3>Live Video</h3>
           </div>
           <div className="messageSender__option">
               <InsertEmoticonIcon style={{color:"orange"}}></InsertEmoticonIcon>
               <h3>Live Video</h3>
           </div>

           </div>

        </div>
    )
}

export default MessageSender;
