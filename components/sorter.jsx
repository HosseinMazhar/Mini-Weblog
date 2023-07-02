import React, { useEffect, useState } from 'react'
import { usePostsStore } from '@/store/postsStore'

export default function Sorter() {
  const [inputValue, setInputValue] = useState('');
  useEffect(()=>{
    setInputValue(usePostsStore.getState().sortingType)
  },[])
  const sortHandler = (e) => {
    switch (e.target.value) {
      case 'asc':
        setInputValue(e.target.value)
        usePostsStore.setState({sortingType: "asc"})
        usePostsStore.getState().sortPosts((a,b) => a.id - b.id)
        break;
      case 'dsc':
        setInputValue(e.target.value)
        usePostsStore.setState({sortingType: "dsc"})
        usePostsStore.getState().sortPosts((a,b) => b.id - a.id)
      default:
        break;
    }
  }
  return (
    <div id="header" className="w-2/3 box-border h-10 border-b-2 border-slate-300 flex flex-row gap-2">
        <select value={inputValue} id="salect-sorting-type" className="mb-2 rounded" onChange={sortHandler}>
          <option value={"asc"}>down to up</option>
          <option value={"dsc"}>up to down</option>
        </select>
    </div>
  )
}
