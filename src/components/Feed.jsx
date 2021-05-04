import React, { useEffect, useState } from 'react'
import db from '../firebase';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
const Feed = () => {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
        setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        );
        console.log("post is",posts)

    },[]);
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
           

           {posts.map((post)=>(
               
               <Post key={post.id} image={post.data.image} username={post.data.username} profilePic={post.data.profilePic} message={post.data.message} timestamp={post.data.timestamp}/>
               
           ))}
           
        </div>
    )
}

export default Feed;
