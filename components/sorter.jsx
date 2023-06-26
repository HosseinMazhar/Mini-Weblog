import React from 'react'
import { usePostsStore } from '@/store/postsStore'

export default function Sorter() {
  const sortHandler = (e) => {
    switch (e.target.value) {
      case 'asc':
        usePostsStore.getState().sortPosts((a,b) => a.id - b.id)
        break;
      case 'dsc':
        usePostsStore.getState().sortPosts((a,b) => b.id - a.id)
      default:
        break;
    }
  }
  return (
    <div id="header" className="w-2/3 box-border h-10 border-b-2 border-slate-300 flex flex-row gap-2">
        <select id="salect-sorting-type" className="mb-2 rounded" onChange={sortHandler}>
          <option value={""}>sort</option>
          <option value={"asc"}>up to down</option>
          <option value={"dsc"}>down to up</option>
        </select>
    </div>
  )
}
