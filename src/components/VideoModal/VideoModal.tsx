import { toggleModal } from '@/lib/features/ModalSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React, { useState } from 'react'
import { Modal } from 'antd';

export default function OpenModal() {

    const currentValue = useAppSelector(state => state.modal.currentValue);
    const dispatch = useAppDispatch();

    return (
        <div className={`z-20 w-[850px] h-auto flex justify-start items-center `}>
            <Modal title="Active garden residence" open={currentValue} width={850} onOk={() => dispatch(toggleModal())} onCancel={() => dispatch(toggleModal())}>
                <iframe className='w-full h-[450px]' src="https://www.youtube.com/embed/2QZGTe4mIQE" title="Active garden residence" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </Modal>
        </div>
    )
}
