import React from 'react'

export default function ContactImformation() {
    return (
        <div className='w-1/5 flex flex-col gap-y-8 divide-y-2'>
            {temp01?.map((item) => (
                <div className='px-5 pt-5 flex flex-col gap-y-4'>
                    <h1 className='text-[18px] text-[#C19C2E] font-bold'>{item?.title}</h1>
                    <p className='text-[14px] text-[#505050]'>{item?.descriptions}</p>
                </div>
            ))
            }
        </div>
    )
}

const temp01 = [
    {
        title: "Байгууллагын хаяг",
        descriptions: "#506, Central Tower, 8-р хороо, Сүхбаатар дүүрэг,Улаанбаатар, Монгол улс"
    },
    {
        title: "Борлуулалтын алба",
        descriptions: "+976 7555-5500"
    },
    {
        title: "Бидэнтэй холбогдох",
        descriptions: "Та өөрийн саналт хүсэлтээ бидэнд илгээгээрэй. Тун удахгүй таньтай бид эргэн холбогдох болно"
    }
]
