import React from 'react'
import activeZone from '@/images/activeZone/activeZone.jpg'
import Image from "next/image";

export default function zone() {
    return (
        <div className='w-full h-full flex flex-row mx-auto'>
            <div className='w-full'>
                <Image src={activeZone} width={1200} height={2000} alt={'Active Complex'} className='w-full h-screen object-contain' quality={100} />
            </div>
            <div className='w-full flex flex-col px-14 divide-y'>
                <div className='py-14'>
                    <p className='text-lg text-gray-500 font-semibold'>
                        Active Garden Residence нь гэр бүлийн бүх гишүүдийг эрүүл, идэвхтэй амьдрах боломжийг бүрдүүлсэн спорт талбай, ногоон бүс, нас насны хүүхдийн онцлогт тохируулсан тоглоомын талбайг төлөвлөсөн нь<p className='text-lg text-[#c19c2e] font-bold'>ӨСӨН НЭМЭГДЭХ ҮНЭ ЦЭН</p> юм.
                    </p>
                </div>
                <div className='w-full flex flex-between gap-x-10 py-14 '>
                    <ul className='text-gray-500 text-md font-semibold list-disc list-inside'>
                        <li>3х3 сагсан бөмбөгийн талбай</li>
                        <li>Мини хөлбөмбөгийн талбай</li>
                        <li>Гар бөмбөгийн талбай</li>
                        <li>Хүүхдийн тоглоомын талбай</li>
                    </ul>
                    <ul className='text-gray-500 text-md font-semibold list-disc list-inside'>
                        <li>Явган болон гүйлтийн зам</li>
                        <li>Мини ханын авиралт</li>
                        <li>Ширээний теннис</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
