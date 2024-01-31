import React from 'react'
import ContactImformation from './ContactImformation'
import ContactTextField from './ContactTextField'

export default function ContactField() {
    return (
        <div
            className='w-5/6 h-5/6 p-10 shadow-xl rounded-sm bg-white flex md:flex-row flex-col gap-x-10'
        >
            <ContactImformation />
            <ContactTextField />
        </div>
    )
}
