import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const progressPath = document.querySelector('.progress-circle path');
        const pathLength = progressPath.getTotalLength();

        progressPath.style.strokeDasharray = pathLength;
        progressPath.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
            setScrollPercent(Math.round((scroll / height) * 100));

            setVisible(scroll > 100); // show after scrolling 100px
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress();

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`progress-wrap ${visible ? 'active-progress' : ''}`} onClick={scrollToTop}>
            <svg className="progress-circle" width="50" height="50">
                <path d="M24,4 a20,20 0 1,1 0,40 a20,20 0 1,1 0,-40" stroke="#3498db" strokeWidth="3" fill="none" />
            </svg>
            <span className="progress-text">{scrollPercent}%</span>
        </div>
    );
};

export default BackToTop;
