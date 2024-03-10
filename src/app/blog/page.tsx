"use client"
import React from 'react'
import Image from 'next/image'
import fix from '@/images/BlogImages/giphy.gif'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { toggleTheme } from '@/lib/features/themeSlice'

export default function blog() {

  const currentTheme = useAppSelector(state => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  console.log("current theme: " + currentTheme);

  return (
    <div className='w-full h-screen flex items-center justify-center'>


      abc
      <p>
        Current theme: {currentTheme}
      </p>
      <button onClick={() => dispatch(toggleTheme())} className='text-[8px] w-10 h-6 bg-gray-400 rounded-ls'>Change theme</button>










      {/* <Image
        alt='server error'
        src={fix}
        quality={100}

        className='w-auto h-auto '
      /> */}
    </div>
  )
}
