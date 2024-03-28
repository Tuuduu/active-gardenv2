import React from 'react'
import activeEducation from '@/images/activeEducation/active_education-894x1024.jpg'
import Image from "next/image";

export default function investment() {
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
                    Active Garden Residence нь үр хойчдоо өвлүүлэн үлдээх үнэт өв /Судалгаагаар Олон улсын шоппинг моллын дэргэд байршилтай орон сууц үнээ алддаггүй, хамгийн багадаа 28%-н өсөлтийг үзүүлдэг/. Санхүүгийн уян хатан, баталгаат нөхцөлүүдийг ашиглан өөрийн ирээдүйдээ хөрөнгө оруулалт хийх нь <p className='text-lg text-[#c19c2e] font-bold'>ӨСӨН НЭМЭГДЭХ ҮНЭ ЦЭН</p> юм.
                </p>
                <ul className='text-lg text-gray-500 py-10 font-semibold list-disc list-outside'>
                    <li>
                        Санхүүгийн уян хатан баталгаат нөхцөл
                    </li>
                    <li>
                        Үр хойчдоо өвлүүлэх үнэт өв
                    </li>
                </ul>
            </div>
        </div>
    )
}
