import { usePostsStore } from "@/store/postsStore"
import { useRouter } from 'next/router';

export default function Post() {
  const postData = usePostsStore.getState().eachPostData;
  const router = useRouter();
  const handleBack = () => {
    router.back();
  }
  return (
    <div className="w-screen h-screen bg-slate-800 flex gap-6 flex-col items-start p-36">
        <button onClick={handleBack} className="text-slate-200 w-24 h-12 border border-slate-600 rounded-md hover:bg-slate-600">{"< Button"}</button>
        <div className="w-full rounded-md bg-slate-600 break-all p-10 flex flex-col gap-5">
            <h1 className="text-4xl text-slate-100">{postData?.title}</h1>
            <p className="text-slate-900">{postData?.body}</p>
        </div>
    </div>
  )
}
