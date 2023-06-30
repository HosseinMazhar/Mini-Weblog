import {create} from 'zustand'

export const usePostsStore = create((set) => ({
  posts: [],
  searchablePosts: [],
  setNewPosts: (newArray) => set({searchablePosts: newArray}),
  searchingItem: "",
  sortingType: "asc",
  sortPosts: (compareFn) => {
    usePostsStore.setState((state) => ({
      searchablePosts: [...state.searchablePosts].sort(compareFn),
    }));
  },
}))