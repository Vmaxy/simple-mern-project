import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id : '1',
            image : 'https://images.unsplash.com/photo-1793543653772-075b4aa285e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D ',
            caption :"this is the scenary"
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/post")
        .then((res) => {
            setPosts(res.data.post)
            
        })},[])

  return (
    <section className='feed-section'>
{
    posts.map((post) => {
        return(
            <div className='post' key={post._id}>
                <img src={post.image} alt="post" />
                <p>{post.caption}</p>
            </div>
        )
    })
}
    </section>
  )
}

export default Feed