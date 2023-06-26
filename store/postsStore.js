import {create} from 'zustand'

export const usePostsStore = create((set) => ({
  posts: [],
  sortPosts: (compareFn) => {
    usePostsStore.setState((state) => ({
      posts: [...state.posts].sort(compareFn),
    }));
  },
}))