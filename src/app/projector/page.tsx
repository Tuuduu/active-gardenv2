import React from 'react'
import Image from 'next/image'
import projectorImage from '@/images/projectorPage/city-planning-1920x1280.jpg'
import ProjectorList from './projectorWidgets/ProjectorList'


export default function projector() {
  return (
    <div className='w-full h-auto pt-10 flex flex-col'>
      <div className="mb-8 px-10">
        <h1 className="lg:text-[34px] text-[22px] font-[400] uppercase">ТӨЛӨВЛӨЛТ</h1>
        <h2 style={{
          content: '',
          display: 'block',
          width: '100px',
          height: '3px',
          background: '#c19c2e',
          margin: '15px 0',
        }} > </h2>
      </div>
      <div className='w-full lg:h-screen h-auto'>
        <Image
          alt='Projector image'
          src={projectorImage}
          className='w-full lg:h-screen h-auto' />
      </div>
      <ProjectorList />
    </div>
  )
}
