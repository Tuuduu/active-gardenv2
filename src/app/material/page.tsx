import React from 'react'
import MaterialList from './MaterialsWidgets/MaterialList'
export default function material() {
  return (
    <div className='w-full h-auto py-10'>
      <div className="mb-6 px-10 ">
        <h1 className="lg:text-[34px] text-[22px] font-[400] uppercase">МАТЕРИАЛ ХИЙЦ</h1>
        <h2 style={{
          content: '',
          display: 'block',
          width: '100px',
          height: '3px',
          background: '#c19c2e',
          margin: '15px 0',
        }} > </h2>
      </div>
      <MaterialList />
    </div>
  )
}
