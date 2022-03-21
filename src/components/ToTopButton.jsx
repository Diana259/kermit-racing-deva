import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './toTopButton.css';

const ScrollToTop = () => {
    const [showTopBtn, setShowToptn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY ) {
                setShowToptn(true);
            } else {
                setShowToptn(false);
            }
        });
    }, []);

    const goToTop = ()=> {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="top-to-btn">
        {" "}
        {showTopBtn && (
            <ArrowUpwardIcon 
            className="icon-position icon-style"
            onClick={goToTop}
            />
        )}{" "}
        </div>
    );
};
export default ScrollToTop;