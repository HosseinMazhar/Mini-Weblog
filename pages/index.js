import { QueryClient, dehydrate, useQuery } from "react-query"
import SearchInput from "@/components/searchInput";
import Sorter from "@/components/sorter";
import PostsContainer from "@/components/postsContainer";
import getPosts from "./api/posts";

export default function Home() {
  const {data, isLoading, isFetching} = useQuery("posts", getPosts);
  return (
    <div id="app-container" className="w-full min-h-screen box-border overflow-hidden bg-slate-800 flex flex-col items-center p-10 gap-6">
      <SearchInput/>
      <Sorter/>
      <PostsContainer posts={data}/>
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('posts', getPosts)
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}