import React from 'react'
import Post from './post'
import { usePostsStore } from '@/store/postsStore'

export default function PostsContainer() {
  const posts = usePostsStore(state=>state.searchablePosts)
 return (
    <main className="w-2/3 grid grid-cols-3 gap-3 mt-1">
        {posts.map((data, index)=> <Post title={data?.title} id={data?.id} key={index}/>)}
    </main>
  )
}
