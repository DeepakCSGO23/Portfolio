import React from 'react'

export default function Navbar() {
  return (
    <div className='absolute list-none top-6 right-10 text-7xl'>
      <nav>
        <ul className='flex flex-row space-x-7 '>
        <li><a href='https://github.com/DeepakCSGO23' target='_blank'><img src='/github.svg' height="50" width="50" alt='github' className='p-2 duration-500 rounded-2xl hover:scale-125 hover:bg-slate-400 '/></a></li>
        <li><a href='https://www.instagram.com/deepak_cecil1/' target='_blank'><img src='/instagram.svg' height="50" width="50" alt='insta' className='p-2 duration-500 hover:scale-125 hover:bg-slate-400 rounded-2xl'/></a></li>
        <li><a href='https://www.youtube.com/channel/UCThKUbtGFZxR3xWc6KJVM7A' target='_blank'><img src='/youtube.svg' height="50" width="50" alt='youtube' className='p-2 duration-500 hover:bg-slate-400 hover:scale-125 rounded-2xl'/></a></li>
        </ul>
      </nav>
    </div>
  )
}
