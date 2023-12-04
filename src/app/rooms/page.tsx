import React from 'react'
import Roomlist from '../components/Rooms/Roomlist'
export default function rooms() {
  return (
    <div className='w-full p-10'>
      <div className="mb-6">
        <h1 className="text-[34px] font-[400] uppercase">ӨРӨӨНИЙ СОНГОЛТ</h1>
        <h2 style={{
          content: '',
          display: 'block',
          width: '100px',
          height: '3px',
          background: '#c19c2e',
          margin: '15px 0',
        }} > </h2>
      </div>
      <Roomlist />
    </div>
  )
}