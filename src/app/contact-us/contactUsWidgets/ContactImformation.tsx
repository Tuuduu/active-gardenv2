import React from 'react'

export default function ContactImformation() {
    return (
        <div className='md:w-1/5 w-full flex flex-col gap-y-8 divide-y-2'>
            {temp01?.map((item) => (
                <div
                    className='px-5 pt-5 flex flex-col md:gap-y-4 gap-y-2'
                    key={item?.id}>
                    <h1 className='lg:text-[18px] md:text-[16px] text-[14px] text-[#C19C2E] font-bold'>{item?.title}</h1>
                    <p className='lg:text-[14px] md:text-[12px] text-[10px] text-[#505050]'>{item?.descriptions}</p>
                </div>
            ))
            }
        </div>
    )
}

const temp01 = [
    {
        id: 1,
        title: "Байгууллагын хаяг",
        descriptions: "#506, Central Tower, 8-р хороо, Сүхбаатар дүүрэг,Улаанбаатар, Монгол улс"
    },
    {
        id: 2,
        title: "Борлуулалтын алба",
        descriptions: "+976 7555-5500"
    },
    {
        id: 3,
        title: "Бидэнтэй холбогдох",
        descriptions: "Та өөрийн саналт хүсэлтээ бидэнд илгээгээрэй. Тун удахгүй таньтай бид эргэн холбогдох болно"
    }
]
