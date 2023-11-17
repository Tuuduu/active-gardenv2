"use client"
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link';

export default function id() {

    const params = useParams();
    const router = useRouter();

    console.log(params);
    console.log(router);

    return (
        <div>
            <div>
                this is id page {params?.id}
                <ul>
                    <li onClick={() => router.push("/home/1")} className='cursor-pointer hover:text-[#bcc4d1]'>Profile 1</li>
                    <Link href={{
                        pathname: "/home/2",
                        query: {
                            userName: "tuuduu",
                            userId: 12,
                            person: JSON.stringify({
                                age: 18,
                            })
                        }
                    }} className='cursor-pointer hover:text-[#bcc4d1]'>Profile 2</Link>
                    <Link href={"/home/3"} className='cursor-pointer hover:text-[#bcc4d1]'>Profile 3</Link>
                </ul>
                <h1 onClick={() => router.back()}>back</h1>
            </div>
        </div>
    )
}
