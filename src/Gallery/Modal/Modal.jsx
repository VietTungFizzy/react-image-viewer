import React, { useState, useEffect } from 'react';
import customStyle from './Modal.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ProgressiveImage from './Image/Image';

function Modal(props) {
    const navigate = useNavigate();
    const [image, seeImage] = useOutletContext();
    const [isUsingPlaceholder, setUsingPlaceholder] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => { setUsingPlaceholder(true)}, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <>
            <div className={customStyle.darkBg} onClick={() => navigate("/")}></div>
            <div className={customStyle.centered}>
                <ProgressiveImage 
                    placeholderSrc={image.placeholderSrc}
                    src={isUsingPlaceholder ? image.src : undefined}
                />
            </div>
            <div className={customStyle.leftCentered}>
                <button className={customStyle.leftArrow} onClick={() => seeImage('back')}>
                    <AiOutlineArrowLeft />
                </button>
            </div>
            <div className={customStyle.rightCentered}>
                <button className={customStyle.rightArrow} onClick={() => seeImage('forward')}>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </>
    )
}

export default Modal;