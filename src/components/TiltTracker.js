import React, { useRef, useState } from 'react';

export const TiltTracker = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Disable physics on mobile
    const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;

    const handleMouseMove = (e) => {
        if (isMobile || !cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to center of the card
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Restrict rotation degrees to max ~10 degrees for professional look
        const multiplier = 10;
        const xRotation = -(y / (rect.height / 2)) * multiplier;
        const yRotation = (x / (rect.width / 2)) * multiplier;

        setRotation({ x: xRotation, y: yRotation });
    };

    const handleMouseEnter = () => {
        if (!isMobile) setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false);
            setRotation({ x: 0, y: 0 }); // Reset smoothly on leave
        }
    };

    return (
        <div 
            className={`tilt-tracker ${className}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isMobile ? 'none' : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1})`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-in-out',
                willChange: 'transform',
                transformStyle: 'preserve-3d'
            }}
        >
            {children}
        </div>
    );
};
