import React from 'react'
import activeEducation from '@/images/activeEducation/active_education-894x1024.jpg'
import Image from "next/image";

export default function education() {
    return (
        <div className='w-full h-full flex flex-row mx-auto'>
            <div className='w-full'>
                <Image
                    src={activeEducation}
                    height={1000}
                    width={500}
                    quality={100}

                    className='w-full h-screen' alt={'Active Garden Education'} />
            </div>
            <div className='w-full flex flex-col divide-y px-14'>
                <p className='text-lg text-gray-500 py-10 font-semibold'>
                    Active Garden Residence нь оршин суугчдынхаа хүүхдүүдийн боловсролд зориулж Кембрижийн хөтөлбөртэй 640 хүүхдийн багтаамжтай улсын дунд сургууль / Кембриж нь хүүхдийг багаас нь зугаатай байдлаар хичээлд дуртай болгож, анхаарал нь төвлөрч ачаалал даах чадвартай болох үед хичээлээ гүнзгийрүүлэн үзэж эхэлдгээрээ онцлогтой Английн үндэсний хөтөлбөр юм. 6 сарын тусгай хөтөлбөрт хамрагдан мэргэшсэн багш нар, хос хэлийг бүрэн эзэмшиж төгсөх сурагчид /, 120 хүүхдийн багтаамжтай цэцэрлэг, сургалт хөгжлийн төвүүдийг дэргэдээ төлөвлөсөн нь <p className='text-lg text-[#c19c2e] font-bold'>ӨСӨН НЭМЭГДЭХ ҮНЭ ЦЭН</p> юм.
                </p>
                <p className='text-lg text-gray-500 py-10 font-semibold'>
                    2 хүүхэдтэй айл дундаж төлбөртэй хувийн сургуульд жилд нийт 16 сая төгрөг сургалтын төлбөрт төлдөг бол 12 жилд нийт 192 сая төгрөг төлж байна. Active Garden Residence-д амьдарснаар 192 сая төгрөгийг хэмнэх боломжтой.
                </p>
                <ul className='text-lg text-gray-500 py-10 font-semibold list-disc list-outside'>
                    <li>
                        640 хүүхдийн багтаамжтай Кембрижийн хөтөлбөртэй улсын дунд сургууль
                    </li>
                    <li>
                        120 хүүхдийн багтаамжтай цэцэрлэг
                    </li>
                    <li>
                        Оршин суугчдад зориулсан сургалт хөгжлийн төвүүд
                    </li>
                </ul>
            </div>
        </div>
    )
}
