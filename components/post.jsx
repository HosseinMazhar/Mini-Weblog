import React from 'react'

export default function Post(props) {
  return (
    <div className="h-40 box-border bg-slate-400 rounded hover:bg-slate-300 cursor-pointer break-word px-4 py-2 flex items-center justify-center text-center">
        <p>{props.title}<br/>id:{props.id}</p>
    </div>
  )
}
