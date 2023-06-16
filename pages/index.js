export default function Home() {
  return (
    <div id="app-container" className="w-screen h-screen bg-slate-800 flex flex-col items-center p-10 gap-6">
      <input id="search-bar" className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline" placeholder="Search..."></input>
      <div id="header" className="w-2/3 h-10 border-b-2 border-slate-300 flex flex-row gap-2">
        <select id="salect-sorting-type" className="mb-2 rounded">
        <option selected>sort</option>
        <option>up to down</option>
        <option>down to up</option>
        </select>
      </div>
      <main className="w-2/3 grid grid-cols-3 gap-3 mt-1">
        <div className="h-40 bg-slate-400 rounded hover:bg-slate-300 cursor-pointer break-all px-4 py-2 text-center flex items-center">
          <p></p>
        </div>
      </main>
    </div>
  )
}
