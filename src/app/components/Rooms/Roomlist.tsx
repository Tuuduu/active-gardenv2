import React from 'react'
import aroom01 from '@/images/RoomsPage/A ROOM/AVG-ALL-ROOMS_38.63-3D-HALF-PLAN.jpg'
import { Image } from 'antd';

export default function Roomlist() {
    const temp01 = [
        {
            image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
    ]


    return (
        <div>
            {temp01.map((item) => (
                <Image
                    width={200}
                    src={item.image}
                />
            ))
            }
        </div>

    )
}
