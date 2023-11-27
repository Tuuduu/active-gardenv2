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
        <div className='w-full h-auto grid grid-cols-8 gap-10 p-10'>
            {temp01.map((item) => (
                <div className='flex flex-col items-center space-y-3'>
                    <Image alt='logo' src={item.image} height={64} width={64} quality={100} />
                    <h1 className='text-[12px] text-[#505050] text-center'>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}

const temp01 = [
    {
        image: logo01,
        title: "FAR-1.2 / БАРИЛГЫН НЯГТАРШИЛ БАГА"
    },
    {
        image: logo02,
        title: "СПОРТЛОГ ОРЧИН"
    },
    {
        image: logo03,
        title: "ХҮҮХДЭД ЭЭЛТЭЙ ОРЧИН"
    },
    {
        image: logo04,
        title: "ЧАНАРТАЙ БРЭНДИЙН ХЭРЭГСЭЛ"
    },
    {
        image: logo09,
        title: "БАРИЛГЫН ЧАНАР, ХИЙЦ"
    },
    {
        image: logo10,
        title: "НОГООН БАЙГУУЛАМЖ"
    },
    {
        image: logo11,
        title: "24 ЦАГИЙН ХАРУУЛ ХАМГААЛАЛТ"
    },
    {
        image: logo14,
        title: "ЗОГСООЛЫН ХҮРТЭЭМЖ САЙН"
    },
    {
        image: logo05,
        title: "24 ЦАГИЙН ХОС ЦАХИЛГААН ШАТ"
    },
    {
        image: logo06,
        title: "ГАЛЫН ДОХИОЛОЛ"
    },
    {
        image: logo07,
        title: "АГААРЫН ЧАНАРЫН ҮЗҮҮЛЭЛТ САЙН"
    },
    {
        image: logo08,
        title: "ДУНДЫН ОРОН ЗАЙ"
    },
    {
        image: logo13,
        title: "УЛСЫН СУРГУУЛЬ"
    },
    {
        image: logo13,
        title: "ЦЭЦЭРЛЭГ"
    },
    {
        image: logo12,
        title: "ХУДАЛДАА, ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР"
    },
    {
        image: logo16,
        title: "ТҮГЖРЭЛД ӨРТӨХГҮЙ ОРОХ, ГАРАХ ГАРЦУУДТАЙ"
    }
]