import React from 'react'
import { useRouter } from 'next/router'
import { usePostsStore } from '@/store/postsStore';

export default function Post(props) {
  const router = useRouter();
  const showPost = () => {
    usePostsStore.setState({eachPostData: props.postData})
    router.push(`/${props.postData.id}`)
  }
  return (
    <div className="h-40 box-border bg-slate-400 rounded hover:bg-slate-300 cursor-pointer break-word px-4 py-2 flex items-center justify-center text-center" onClick={showPost}>
        <p>{props.postData.title}<br/>id:{props.postData.id}</p>
    </div>
  )
}
