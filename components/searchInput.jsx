import React, { useEffect, useState } from 'react'
import { usePostsStore } from '@/store/postsStore'

export default function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  useEffect(()=>{
    setInputValue(usePostsStore.getState().searchingItem)
  },[])
  const handleSearch = (e) => {
    setInputValue(e.target.value);
    usePostsStore.setState({searchingItem: e.target.value})
    let posts = usePostsStore.getState().posts
    usePostsStore.setState({searchablePosts : posts})
    let searchResult = usePostsStore.getState().searchingItem
    let searchedResultArray = usePostsStore.getState().searchablePosts.filter((object) => {
      return object.title.includes(searchResult) || object.body.includes(searchResult)
    })
    let sortingType = usePostsStore.getState().sortingType
    sortingType == "asc" ? searchedResultArray.sort((a,b) => a.id - b.id) : searchedResultArray.sort((a,b) => b.id - a.id) 
    usePostsStore.getState().setNewPosts(searchedResultArray)
  }
  return (
    <input id="search-bar" onChange={handleSearch} value={inputValue} className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline" placeholder="Search..."></input>
  )
}
