import React from 'react'
import activePlanning from '@/images/activeEducation/active_education-894x1024.jpg'
import Image from "next/image";

export default function planning() {
    return (
        <div className='w-full h-full flex flex-row mx-auto'>
            <div className='w-full'>
                <Image src={activePlanning} width={1200} height={2000} alt={'Active Complex'} className='w-full h-screen object-cover' quality={100} />
            </div>
            <div className='w-full flex flex-col px-14 divide-y'>
                <div className='py-14'>
                    <p className='text-lg text-gray-500 font-semibold'>
                        Active Garden Residence нь өрх бүрд нарны тусгал чөлөөтэй тусах боломжтой барилгын ташуу хийцлэл, саруул уужим цонхтой төлөвлөгдсөн. Барилга хоорондын зай чөлөөтэй учир орчны харууц сайн, гэр болон орчны агаарыг чөлөөтэй сэлгэх боломжийг бүрдүүлж автомашингүй чөлөөт бүс, ногоон байгууламжийг шийдэж амар тайван, аюулгүй амьдрах орчныг бүрдүүлсэн нь<p className='text-lg text-[#c19c2e] font-bold'>ӨСӨН НЭМЭГДЭХ ҮНЭ ЦЭН</p> юм.
                    </p>
                </div>
                <div className='w-full flex flex-between gap-x-10 py-14 '>
                    <ul className='text-gray-500 text-md font-semibold list-disc list-inside'>
                        <li>Нарны тусгал чөлөөтэй нэвтрэх</li>
                        <li>Салхины урсгал, агаар чөлөөтэй сэлгэх</li>
                        <li>Барилгын ташуу хийцлэл</li>
                        <li>Авто замын үндсэн 2 сүлжээнд оролцох</li>
                        <li>Орчны харууц сайн</li>
                    </ul>
                    <ul className='text-gray-500 text-md font-semibold list-disc list-inside'>
                        <li>Харуул хамгаалалтын систем</li>
                        <li>Автоматжуулалтын систем</li>
                        <li>Ил болон дулаан зогсоол</li>
                        <li>Орчны төлөвлөлт сайтай</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
