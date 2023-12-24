'use client'

import { useState, useEffect } from 'react';

const VerticalNav = () => {
    const [markerPosition, setMarkerPosition] = useState(0);
    const [markerColor, setMarkerColor] = useState('bg-white');

    useEffect(() => {
        const handleScroll = () => {
            const screenHeight = window.innerHeight - 250;
            const newPosition = window.scrollY / (document.body.scrollHeight - screenHeight);
            setMarkerPosition(newPosition * 100);

            // Cambiar el color del marcador cada 100vh
            const scrollSection = Math.floor(window.scrollY / screenHeight);
            let color;
            switch (scrollSection % 3) {
                case 0:
                    color = 'bg-white';
                    break;
                case 1:
                    color = 'bg-black';
                    break;
                case 2:
                    color = 'bg-green-500';
                    break;
                default:
                    color = 'bg-white';
            }
            setMarkerColor(color);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='fixed z-10 ml-24 h-screen'>
            <div className='absolute left-0 h-full w-[1px] rounded-md bg-white opacity-30'></div>
            <div
                className={`absolute left-0 h-[5rem]  w-[1px] ${markerColor}`}
                style={{ top: `${markerPosition}%` }}
            ></div>
        </div>
    );
};

export default VerticalNav;


