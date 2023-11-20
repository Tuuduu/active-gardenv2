import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/images/homePage/background-1-1_yppyx6.png';
import logo01 from '@/images/homePage/ProjectsAbout/Location.png';
import logo02 from '@/images/homePage/ProjectsAbout/Control.png';
import logo03 from '@/images/homePage/ProjectsAbout/Project.png';
import logo04 from '@/images/homePage/AdvantageImage/teso-prop-logo-2.png';


export default function ProjectsAbout() {
    return (
        <div className='w-full relative'>
            <Image
                alt="banner"
                src={backgroundImage}
                width={2000}
                height={2000}
                quality={100}
                className="w-full h-screen absolute object-cover z-[-1]" />
            <div
                className="mb-5
             p-10">
                <h1 className="text-[34px] font-[600] uppercase">ТӨСЛИЙН ТУХАЙ</h1>
                <h2 style={{
                    content: '',
                    display: 'block',
                    width: '100px',
                    height: '3px',
                    background: '#c19c2e',
                    margin: '15px 0',
                }}> </h2>
                <div
                    className='w-full flex flex-row space-x-5 bg-white p-10'
                    style={{
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                    }}>
                    <div>
                        <Image src={logo01} alt='logo' width={100} height={100} quality={100} />
                    </div>
                    <div>
                        <h1 className='text-[20px] font-[600] pb-2'>Байршил</h1>
                        <p className='text-[15px]'>Улаанбаатар хотын шинэ суурьшлын бүс, Хан-Уул дүүрэг Яармагт байрлах эрүүл хөрс, цэнгэг агаар бүхий Богд уулын бэл, Туул голын хөвөөнд байрлалтай 5А CONCEPT бүхий эрүүл, идэвхтэй амьдралын хэв маягийг эрхэмлэсэн бизнес зэрэглэлийн 856 айлын орон сууц.</p>
                    </div>
                </div>
                <div className='w-full flex flex-row space-x-8 py-8'>
                    <div
                        className='w-full flex flex-row space-x-5 bg-white p-10'
                        style={{
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                        }}>
                        <div>
                            <Image src={logo03} alt='logo' width={70} height={70} quality={100} />
                        </div>
                        <div>
                            <h1 className='text-[20px] font-[600] pb-2'>Төсөл хэрэгжих хугацаа</h1>
                            <p className='text-[15px]'>1-р үе: 2 блок 2022 оны III улирал<br /><br />

                                2-р үе: 2 блок 2023 оны III улирал<br /><br />

                                3-р үе: 4 блок 2024 оны III улирал</p>
                        </div>
                    </div>
                    <div
                        className='w-full flex flex-row space-x-5 bg-white p-10'
                        style={{
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                        }}>
                        <div>
                            <Image src={logo02} alt='logo' width={100} height={100} quality={100} />
                        </div>
                        <div>
                            <h1 className='text-[20px] font-[600] pb-2'>Төлөвлөлт</h1>
                            <p className='text-[15px]'>70% – Нийтийн эзэмшлийн талбай, ногоон байгууламж, спортын талбай, хүүхдэд зориулсан тоглоомын талбай, амралтын чөлөөт бүс<br /><br />

                                16% – Автомашины зам талбай, зогсоол<br /><br />

                                14% – Барилга байгууламж эзэлнэ</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <div
                        className='w-1/4 flex flex-col space-x-5 bg-white p-10'
                        style={{
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                        }}>
                        <div className='w-full flex flex-col'>
                            <h1 className='text-[24px] font-[600] pb-2 w-1/2'>Төслийн хөгжүүлэгч</h1>
                            <h2 className='w-full flex justify-end py-2 pb-5'
                                style={{
                                    height: '1px',
                                    borderTop: '2px solid #ebebeb',
                                    display: 'block',
                                    position: 'relative',
                                    top: '1px',
                                    width: '30%',
                                }}></h2>
                        </div>
                        <div className='w-full flex justify-center pr-8'>
                            <Image src={logo04} alt='logo' width={150} height={58} quality={100} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
