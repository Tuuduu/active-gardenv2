import React from 'react'

export default function FarIndecatorPageAnimation() {

    const anime = require('animejs');

    anime({
        targets: 'div',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
    });

    return (
        <div className='div '>FarIndecatorPageAnimation</div>
    )
}
