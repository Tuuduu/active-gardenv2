import React from 'react'

export default function ContactTextField() {
    return (
        <div className='w-full h-auto flex flex-col gap-y-5 p-5'>
            {temp01?.map((item) => (
                <div>
                    <h1 className='text-[18px] text-[#1F1F1F]'>{item?.title}</h1>
                    <input className='w-full h-10 border-b border-gray-200 text-gray-500 focus:border-[#C19C2E] focus:outline-0'></input>
                </div>
            ))
            }
            <div className='w-full h-auto flex flex-col gap-y-5'>
                <h1 className='text-[18px] text-[#1F1F1F]'>Агуулга</h1>
                <textarea name="" id="" className='w-full h-[300px] border-b border-gray-200 text-gray-500 focus:border-[#C19C2E] focus:outline-0'></textarea>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                <button className='w-32 h-10 text-white bg-black hover:bg-[#C19C2E]'>Илгээх</button>
            </div>
        </div>
    )
}

const temp01 = [
    {
        id: 1,
        title: "Нэр"
    },
    {
        id: 2,
        title: "Имэйл хаяг"
    },
    {
        id: 3,
        title: "Гарчиг"
    },
]