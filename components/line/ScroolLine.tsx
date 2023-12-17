'use client'

import { useState, useEffect } from 'react';

const VerticalNav = () => {
    const [markerPosition, setMarkerPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            setMarkerPosition(newPosition * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed ml-24 h-screen">
            <div className="absolute left-0 bg-white opacity-30 w-[1px] h-full rounded-md"></div>
            <div className="absolute left-0 bg-white w-[1px] h-[8rem]" style={{ top: `${markerPosition}%` }}></div>
        </div>
    );
};

export default VerticalNav;
