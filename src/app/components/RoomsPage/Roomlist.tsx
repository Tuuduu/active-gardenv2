"use client"
import React, { useEffect } from 'react'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'

export default function Roomlist() {
    useEffect(() => {
        initLightboxJS("Insert License key", "Insert plan type here");
    });



    return (
        <div className='w-full flex flex-col space-y-16'>
            {temp01.map((item) => (
                <div
                    className='w-full flex flex-col'
                    key={item?.id}
                >
                    <div className='flex flex-row space-x-10'>
                        <div className="mb-6">
                            <h1 className="text-[20px] text-[#c19c2e] font-bold uppercase">{item?.roomType}</h1>
                            <h2 style={{
                                content: '',
                                display: 'block',
                                width: '100px',
                                height: '3px',
                                background: '#c19c2e',
                                margin: '15px 0',
                            }} > </h2>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-[20px] text-[#534b40] uppercase">{item?.roomSize}</h1>
                            <h2 style={{
                                content: '',
                                display: 'block',
                                width: '100px',
                                height: '3px',
                                background: '#c19c2e',
                                margin: '15px 0',
                            }} > </h2>
                        </div>
                    </div>
                    <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true} >
                        {item.rooms.map((item) => (
                            <img
                                className='object-cover bg-cover w-[500px] h-auto border border-gray-200'
                                src={item}
                                key={item}
                            />
                        ))
                        }
                    </SlideshowLightbox>
                </div>
            ))
            }
        </div>

    )
}

const temp01 = [
    {
        id: 1,
        roomType: "a room",
        roomSize: "38.63мкв - 1 өрөө /2-7 давхарт/",
        rooms: [
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701781990/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM/AVG-ALL-ROOMS_38.63-BLOCK-PLAN_in0ei3.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743020/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM/AVG-ALL-ROOMS_38.63-TOP-PLAN_ussaom.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743021/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM/AVG-ALL-ROOMS_38.63-3D-HALF-PLAN_ouhcld.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743021/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM/AVG-ALL-ROOMS_38.63-TERRACE_jjpdcw.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701782125/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM/AVG-ALL-ROOMS_38.63-LIVING-ROOM_sgjddq.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701782124/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM/AVG-ALL-ROOMS_38.63-BEDROOM_vnjlar.jpg',
        ]
    },
    {
        id: 2,
        roomType: "B,C ROOM",
        roomSize: "39.42мкв - 1 өрөө /2-7 давхарт/",
        rooms: [
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%2CC%20ROOM/AVG-ALL-ROOMS_39.42-block-plan-600x338_vdtozy.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%2CC%20ROOM/AVG-ALL-ROOMS_39.42-topplan-600x338_waekyj.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%2CC%20ROOM/AVG-ALL-ROOMS_39.42-3dplan-600x338_hzd9gp.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%2CC%20ROOM/AVG-ALL-ROOMS_39.42-living-room-600x338_v0piar.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%2CC%20ROOM/AVG-ALL-ROOMS_39.42-bedroom-600x338_jbv6qh.jpg',
            'https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%2CC%20ROOM/AVG-ALL-ROOMS_39.42-bathroom-600x338_cvwuwm.jpg',
        ]
    },
    {
        id: 3,
        roomType: "D,E ROOM",
        roomSize: "39.42мкв - 1 өрөө /2-7 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/D%2CE%20ROOM/AVG-ALL-ROOMS_50.33-block-600x338_hfdbei.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743009/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/D%2CE%20ROOM/AVG-ALL-ROOMS_50.33-top-plan-600x338_vk3mz5.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/D%2CE%20ROOM/AVG-ALL-ROOMS_50.33-3d-600x338_jmlknm.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/D%2CE%20ROOM/AVG-ALL-ROOMS_50.33-terrace-600x338_x9bohh.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/D%2CE%20ROOM/AVG-ALL-ROOMS_50.33-kitchen-600x338_jbmkla.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743008/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/D%2CE%20ROOM/AVG-ALL-ROOMS_50.33-bathroom-600x338_qqmvjy.jpg",
        ]
    },
    {
        id: 4,
        roomType: "F,G ROOM",
        roomSize: "56.07мкв - 2 өрөө /2-7 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743011/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/F%2CG%20ROOM/AVG-ALL-ROOMS_50.33-block-1-600x338_hydauk.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743012/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/F%2CG%20ROOM/AVG-ALL-ROOMS_50.33-top-plan-1-600x338_jmzm9m.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743011/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/F%2CG%20ROOM/AVG-ALL-ROOMS_50.33-3d-1-600x338_t6ynui.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743011/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/F%2CG%20ROOM/AVG-ALL-ROOMS_50.33-terrace-1-600x338_ea7azs.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743011/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/F%2CG%20ROOM/AVG-ALL-ROOMS_50.33-kitchen-1-600x338_fdqkkx.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743011/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/F%2CG%20ROOM/AVG-ALL-ROOMS_50.33-bathroom-1-600x338_i8th0z.jpg",
        ]
    },
    {
        id: 5,
        roomType: "H,I ROOM",
        roomSize: "64.92мкв - 3 өрөө /2-7 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743016/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-blockplan-600x338_x3ojqe.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743018/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-top-plan-600x338_ejiagj.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743015/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-3d-plan-600x338_rz69kq.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743018/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-washroom-600x338_aktbt1.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743017/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-living-room-600x338_wfxbhg.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743017/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-kitchen-600x338_musr8x.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743017/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-entry-area-600x338_lwf6gn.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743016/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-childroom-600x338_kruyow.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743016/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-bedroom-600x338_s2bszc.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743016/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%2CI%20ROOM/AVG-ALL-ROOMS_64-badhroom-600x338_wuemot.jpg",
        ]
    },
    {
        id: 6,
        roomType: "A ROOM",
        roomSize: "61.55мкв - 3 өрөө /8-15 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743006/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM_2/AVG-ALL-ROOMS_61-block-600x338_ycpigi.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743005/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM_2/AVG-ALL-ROOMS_61-top-plan-600x338_nnajvm.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743006/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM_2/AVG-ALL-ROOMS_61-3d-plan-600x338_rxoka1.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM_2/AVG-ALL-ROOMS_61-living-room-600x338_dabs6i.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM_2/AVG-ALL-ROOMS_61-kitchen-600x338_nman1s.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743006/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/A%20ROOM_2/AVG-ALL-ROOMS_61-bedroom-600x338_d8twvi.jpg",
        ]
    },
    {
        id: 7,
        roomType: "B ROOM",
        roomSize: "65.40мкв - 3 өрөө /8-15 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%20ROOM_2/AVG-ALL-ROOMS_65-block-plan-600x338_iisn4g.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%20ROOM_2/AVG-ALL-ROOMS_65-top-palna-600x338_nmnvtq.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743006/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%20ROOM_2/AVG-ALL-ROOMS_65-3d-plan-600x338_rjhwjg.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%20ROOM_2/AVG-ALL-ROOMS_65-living-room-600x338_zabydn.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%20ROOM_2/AVG-ALL-ROOMS_65-bedroom-600x338_djaax5.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743007/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/B%20ROOM_2/AVG-ALL-ROOMS_65-badhroom-600x338_zvnhkm.jpg",
        ]
    },
    {
        id: 8,
        roomType: "E,F ROOM",
        roomSize: "79.46мкв - 3 өрөө /8-16 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743009/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-block-600x338_nodduj.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743010/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-top-600x338_zmarwx.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743009/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-3d-plan-600x338_kih1gx.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743010/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-master-bedroom-600x338_ssvuyq.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743010/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-living-600x338_ogqemy.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743010/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-kitchen-600x338_rhnlcl.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743010/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-entryarea-600x338_xu7g1v.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743009/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-bedroom-600x338_vcav18.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743009/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/E%2CF%20ROOM_2/AVG-ALL-ROOMS_79-badhroom-600x338_pqwrhv.jpg",
        ]
    },
    {
        id: 9,
        roomType: "G,H ROOM",
        roomSize: "92.82мкв - 4 өрөө /8-16 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743012/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-block-600x338_bvso5g.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743014/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-top-600x338_bfhkq9.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743012/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-3d-600x338_pboqyj.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743013/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-masterbedroom-600x338_nosbsu.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743013/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-master-bedroom-600x338_ejcxrh.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743013/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-livingroom-600x338_u5jx8w.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743013/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-kidsroom-600x338_tuzkga.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743013/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-entry-area-600x338_jicjyd.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743012/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/G%2CH%20ROOM_2/AVG-ALL-ROOMS_92-badhroom-600x338_uiy7ee.jpg",
        ]
    },
    {
        id: 10,
        roomType: "H ROOM",
        roomSize: "129.91мкв - 4 өрөө /16 давхарт/",
        rooms: [
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743014/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-block-600x338_e8mtvf.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743015/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-top-600x338_xus0zi.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743014/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-3d-600x338_hahbkd.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743015/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-masterbedroom-00t-600x338_ciyfrc.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743015/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-livingroom-600x338_jy76rw.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743014/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-kidsroom-600x338_qg5ldr.jpg",
            "https://res.cloudinary.com/dj23fdx67/image/upload/v1701743014/Active%20garden/04%20%D3%A8%D1%80%D3%A9%D3%A9%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%82/H%20ROOM_2/AVG-ALL-ROOMS_129-bedroom-00toi-600x338_jgyu7a.jpg",
        ]
    },

]
