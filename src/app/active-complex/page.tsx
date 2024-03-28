import React from 'react'
import Image from "next/image";
import activeComplex from '@/images/activeComplex/active_complex.jpg'

export default function complex() {
    return (
        <div className='w-full h-full flex flex-row mx-auto'>
            <div className='w-full'>
                <Image src={activeComplex} width={500} height={1000} alt={'Active Complex'} className='w-full h-screen bg-cover object-cover' quality={100} />
            </div>
            <div className='w-full flex flex-col px-14 divide-y'>
                <div className='py-14'>
                    <p className='text-lg text-gray-500 font-semibold'>
                        Active Garden Residence нь оршин суугчдынхаа цаг завыг хэмнэхэд зориулж автомашины 1,000 ил зогсоол, 500 дулаан зогсоол, бүх төрлийн үйлчилгээг багтаасан 50,000мкв талбайтай олон улсын стандарт хангасан Монголын анхны шоппинг молл хэлбэрийн И-мартыг дэргэдээ төлөвлөсөн нь <p className='text-lg text-[#c19c2e] font-bold'>ӨСӨН НЭМЭГДЭХ ҮНЭ ЦЭН</p> юм.
                    </p>
                </div>
                <div className='w-full flex flex-between gap-x-10 py-14 '>
                    <ul className='text-gray-500 text-md font-semibold list-disc list-inside'>
                        <li>Монголын анхны шоппинг молл хэлбэрийн И-Март</li>
                        <li>Банкны үйлчилгээ</li>
                        <li>Үүрэн холбооны оператор</li>
                        <li>Конвиниенс сүлжээ  дэлгүүр</li>
                        <li>Үсчин, гоо сайхан</li>
                    </ul>
                    <ul className='text-gray-500 text-md font-semibold list-disc list-inside'>
                        <li>Фитнес, иога,спиннинг</li>
                        <li>Кофе шоп</li>
                        <li>Бэйкери</li>
                        <li>Мини маркет</li>
                        <li>Шүдний эмнэлэг</li>
                        <li>Эмийн сан</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
