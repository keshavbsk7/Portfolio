import React, { useEffect, useState } from 'react';

export const NeoCursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(max-width: 768px)").matches) {
            setIsMobile(true);
            return;
        }

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e) => {
            const target = e.target;
            const isClickable = target.tagName.toLowerCase() === 'a' || 
                                target.tagName.toLowerCase() === 'button' || 
                                target.closest('a') || 
                                target.closest('button') ||
                                target.classList.contains('nav-link');
            setIsHovering(!!isClickable);
        };

        const updateScroll = () => {
             const scrollY = window.scrollY;
             const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
             const scrolled = height > 0 ? (scrollY / height) * 100 : 0;
             setScrollProgress(scrolled);
        };

        // Initial scroll calculation
        updateScroll();

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateHoverState);
        window.addEventListener('scroll', updateScroll);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateHoverState);
            window.removeEventListener('scroll', updateScroll);
        };
    }, []);

    if (isMobile) return null;

    return (
        <div className="cursor-wrapper">
            <div 
                className={`neo-dot ${isHovering ? 'hovering' : ''}`} 
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>
            <div 
                className={`neo-circle ${isHovering ? 'hovering' : ''}`} 
                style={{ 
                    left: `${position.x}px`, 
                    top: `${position.y}px`, 
                    background: `conic-gradient(#AA367C ${scrollProgress}%, transparent ${scrollProgress}%)` 
                }}
            >
                <div className="neo-circle-inner"></div>
            </div>
        </div>
    );
};
