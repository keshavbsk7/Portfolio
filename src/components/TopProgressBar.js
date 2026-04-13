import React, { useState, useEffect } from 'react';

export const TopProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', calculateScroll);
        return () => window.removeEventListener('scroll', calculateScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            zIndex: 99999
        }}>
            <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
                transition: 'width 0.1s ease-out',
                boxShadow: '0 0 10px #AA367C'
            }}></div>
        </div>
    );
};
