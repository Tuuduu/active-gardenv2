import React from 'react'
import Image from 'next/image'
import image01 from '@/images/MaterialsPage/1-1-300x300.png'
import image02 from '@/images/MaterialsPage/2-1-300x300.png'
import image03 from '@/images/MaterialsPage/3-1-300x300.png'
import image04 from '@/images/MaterialsPage/6-1-300x300.png'
import image05 from '@/images/MaterialsPage/5-1-300x300.png'
import image06 from '@/images/MaterialsPage/7-1-300x300.png'
import image07 from '@/images/MaterialsPage/8-1-300x300.png'
import image08 from '@/images/MaterialsPage/9-1-300x300.png'
import image09 from '@/images/MaterialsPage/10-1-300x300.png'


export default function MaterialList() {
    return (
        <div className='w-full grid grid-cols-3 gap-10 px-10'>
            {temp01.map((item) => (
                <div
                    key={item.id}
                    className='flex flex-col space-y-2'>
                    <div className="">
                        <h1 className="text-[34px] text-[#534b40] font-[700] uppercase">0{item.id}</h1>
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
                        <Image alt='materials image' src={item.image} width={290} height={290} quality={100} className='w-auto h-auto' />
                    </div>
                    <h1 className='text-[18px] text-[#505050] font-bold'>{item.title}</h1>
                    <p className='w-3/4 text-[18px] text-[#505050]'>{item.description}</p>
                </div>
            ))

            }
        </div>
    )
}


const temp01 = [
    {
        id: 1,
        image: image01,
        title: "AMERICAN STANDART",
        description: "Ариун цэврийн өрөөний чанартай тоноглол"
    },
    {
        id: 2,
        image: image02,
        title: "E-EGGER",
        description: "Евро стандарт хангасан Герман улсын өндөр зэрэглэлийн шахалт бүхий шал"
    },

    {
        id: 3,
        image: image09,
        title: "FORMET STEEL",
        description: "Евро стандартыг хангасан Турк улсын бүргэд хаалга, модон хаалга"
    },

    {
        id: 4,
        image: image03,
        title: "DOBU",
        description: "Олон улсын стандарт хангасан ухаалаг автоматжуулалтын систем"
    },

    {
        id: 5,
        image: image05,
        title: "BRUSBOX",
        description: "Евро стандарт хангасан Герман технологийн лови түрхэц бүхий 2 давхаргат вакум цонх"
    },

    {
        id: 6,
        image: image04,
        title: "HYUNDAI",
        description: "Брендийн 24 цагийн хос цахилгаан шат"
    },

    {
        id: 7,
        image: image06,
        title: "СИБ КАБЕЛЬ",
        description: "Олон улсын чанарын стандартын баталгаатай цахилгааны кабель"
    },

    {
        id: 8,
        image: image07,
        title: "УГСРАЛТ",
        description: "Газар хөдлөлтийн 8 баллд тэсвэртэй хүчитгэсэн арматур, өндөр зэрэглэлийн төмөр бетон цутгалт"
    },

    {
        id: 9,
        image: image08,
        title: "MЕТАЛ ФАСАД",
        description: "50 жилийн баталгаатай өнгө үзэмжээ үл алдах чанартай метал фасад"
    },
]