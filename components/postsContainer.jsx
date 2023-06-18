import React from 'react'
import Post from './post'

export default function PostsContainer(props) {
 return (
    <main className="w-2/3 grid grid-cols-3 gap-3 mt-1">
        {props.posts.map((data, index)=> <Post title={data?.title} id={data?.id} key={index}/>)}
    </main>
  )
}
