import React from 'react'

export default function Sorter() {
  return (
    <div id="header" className="w-2/3 box-border h-10 border-b-2 border-slate-300 flex flex-row gap-2">
        <select id="salect-sorting-type" className="mb-2 rounded">
            <option selected>sort</option>
            <option>up to down</option>
            <option>down to up</option>
        </select>
    </div>
  )
}
