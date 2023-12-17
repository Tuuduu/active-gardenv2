import React from 'react'
import Image from 'next/image'
import logo01 from '@/images/projectorPage/list/1-100x100.png'
import logo02 from '@/images/projectorPage/list/2-100x100.png'
import logo03 from '@/images/projectorPage/list/3-100x100.png'
import logo04 from '@/images/projectorPage/list/4-100x100.png'
import logo05 from '@/images/projectorPage/list/5-100x100.png'
import logo06 from '@/images/projectorPage/list/6-100x100.png'
import logo07 from '@/images/projectorPage/list/7-100x100.png'
import logo08 from '@/images/projectorPage/list/8-100x100.png'
import logo09 from '@/images/projectorPage/list/9-100x100.png'
import logo10 from '@/images/projectorPage/list/10-100x100.png'
import logo11 from '@/images/projectorPage/list/11-100x100.png'
import logo12 from '@/images/projectorPage/list/12-100x100.png'
import logo13 from '@/images/projectorPage/list/13-100x100.png'
import logo14 from '@/images/projectorPage/list/15-100x100.png'
import logo16 from '@/images/projectorPage/list/16-100x100.png'

export default function ProjectorList() {
    return (
        <div className='w-full h-auto grid lg:grid-cols-8 md:grid-cols-4 grid-cols-3 gap-10 p-10'>
            {temp01.map((item) => (
                <div
                    key={item.id}
                    className='flex flex-col items-center space-y-3'>
                    <Image alt='logo' src={item.image} height={64} width={64} quality={100} />
                    <h1 className='text-[12px] text-[#505050] text-center'>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}

const temp01 = [
    {
        id: 1,
        image: logo01,
        title: "FAR-1.2 / БАРИЛГЫН НЯГТАРШИЛ БАГА"
    },
    {
        id: 2,
        image: logo02,
        title: "СПОРТЛОГ ОРЧИН"
    },
    {
        id: 3,
        image: logo03,
        title: "ХҮҮХДЭД ЭЭЛТЭЙ ОРЧИН"
    },
    {
        id: 4,
        image: logo04,
        title: "ЧАНАРТАЙ БРЭНДИЙН ХЭРЭГСЭЛ"
    },
    {
        id: 5,
        image: logo09,
        title: "БАРИЛГЫН ЧАНАР, ХИЙЦ"
    },
    {
        id: 6,
        image: logo10,
        title: "НОГООН БАЙГУУЛАМЖ"
    },
    {
        id: 7,
        image: logo11,
        title: "24 ЦАГИЙН ХАРУУЛ ХАМГААЛАЛТ"
    },
    {
        id: 8,
        image: logo14,
        title: "ЗОГСООЛЫН ХҮРТЭЭМЖ САЙН"
    },
    {
        id: 9,
        image: logo05,
        title: "24 ЦАГИЙН ХОС ЦАХИЛГААН ШАТ"
    },
    {
        id: 10,
        image: logo06,
        title: "ГАЛЫН ДОХИОЛОЛ"
    },
    {
        id: 11,
        image: logo07,
        title: "АГААРЫН ЧАНАРЫН ҮЗҮҮЛЭЛТ САЙН"
    },
    {
        id: 12,
        image: logo08,
        title: "ДУНДЫН ОРОН ЗАЙ"
    },
    {
        id: 13,
        image: logo13,
        title: "УЛСЫН СУРГУУЛЬ"
    },
    {
        id: 14,
        image: logo13,
        title: "ЦЭЦЭРЛЭГ"
    },
    {
        id: 15,
        image: logo12,
        title: "ХУДАЛДАА, ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР"
    },
    {
        id: 16,
        image: logo16,
        title: "ТҮГЖРЭЛД ӨРТӨХГҮЙ ОРОХ, ГАРАХ ГАРЦУУДТАЙ"
    }
]