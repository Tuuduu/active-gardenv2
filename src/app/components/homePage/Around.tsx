import React from 'react'
import aroundImage from '@/images/homePage/Around/location.gif'
import Image from 'next/image'
import backgroundImage from '@/images/homePage/background-1-1_yppyx6.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Around() {
    return (
        <div className='w-full pt-5'>

            <div className="mb-8 px-10">
                <h1 className="lg:text-[34px] text-[22px] font-[600] uppercase">ОРЧНЫ ТОЙМ</h1>
                <h2 style={{
                    content: '',
                    display: 'block',
                    width: '100px',
                    height: '3px',
                    background: '#c19c2e',
                    margin: '15px 0',
                }} > </h2>
            </div>
            <Image
                src={aroundImage}
                alt='aroundImage'
                width={1029}
                height={647}
                quality={100}
                className='w-full' />
            <div className='w-full h-full flex flex-col relative'>
                <Image
                    alt="banner"
                    src={backgroundImage}
                    width={1000}
                    height={200}
                    quality={100}
                    className="w-full h-[380px] absolute object-cover z-[-1]" />
                <div className='w-full flex lg:flex-row flex-col p-10 lg:space-x-10 lg:space-y-0 space-y-10 border-b-2 border-gray-400'>
                    {temp01.map((item) => (
                        <div
                            key={item.id}
                            className='p-10 border cursor-pointer group border-gray-200 bg-white w-full flex flex-col items-center justify-center space-y-5'>
                            <FontAwesomeIcon icon={item?.logo} className='lg:w-[80px] lg:h-[80px] w-[45px] h-[45px] text-[#c19c2e]' />
                            <h1 className='group-hover:text-[#c19c2e] lg:text-[20px] text-[14px]'>{item?.title}</h1>
                            <p className='group-hover:text-[#c19c2e] lg:text-[13px] text-[10px]'>{item?.descripsion}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

const temp01 = [
    {
        id: '1',
        logo: faConnectdevelop,
        title: 'Борлуулалтын алба',
        descripsion: '7555 5500',
    },
    {
        id: '2',
        logo: faCloudArrowDown,
        title: 'Танилцуулга татах',
        descripsion: 'Файл татах',
    },
    {
        id: '3',
        logo: faEnvelope,
        title: 'Санал хүсэлт илгээх',
        descripsion: 'И-мэйл илгээх',
    }
]
