import React from 'react'
import Image from 'next/image';
import { animate } from 'animejs'

const animation = animate('div', {
    translateX: 100,
    translateY: { to: 50, ease: 'outExpo' },
    alternate: true,
    ease: 'outQuad',
});

export default function FarIndecatorPageAnimation() {
    return (
        <div className='div'>
            <DotGrid />
        </div>
    )
}

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div>

                </div>
            )
        }
    }

    return <div>a</div>;
};
