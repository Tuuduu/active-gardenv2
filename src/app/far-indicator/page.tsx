import React from 'react'
import FarIndecatorPageImage from '../components/FarIndecatorPage/FarIndecatorPageImage'
import FarIndecatorDescription from '../components/FarIndecatorPage/FarIndecatorDescription'
import FarIndecatorPageAnimation from '../components/FarIndecatorPage/FarIndecatorPageAnimation'
export default function far() {
  return (
    <div className='w-full h-auto py-10'>
      <div className="mb-6 px-10">
        <h1 className="text-[34px] font-[400] uppercase">FAR /Floor Area Ratio/</h1>
        <h2 style={{
          content: '',
          display: 'block',
          width: '100px',
          height: '3px',
          background: '#c19c2e',
          margin: '15px 0',
        }} > </h2>
      </div>
      <div className='w-full h-auto'>
        <FarIndecatorPageImage />
        <FarIndecatorDescription />
        <FarIndecatorPageAnimation />
      </div>
    </div>
  )
}
