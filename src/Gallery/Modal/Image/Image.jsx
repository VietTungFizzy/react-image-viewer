import React, { useState, useEffect } from 'react';
import customeStyle from './Image.module.css';

function ProgressiveImage(props) {
    const { 
        placeholderSrc, 
        src, 
        alt,
        onClick
    } = props;

    const [srcImage, setSrcImage] = useState(placeholderSrc || src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSrcImage(src)
    }, [src])

    const customClass = placeholderSrc && srcImage === placeholderSrc ? customeStyle.loading : customeStyle.loaded;

    return (
        <img
            src={srcImage}
            alt={alt || ""}
            className={customClass}
            width="800"
            height="600"
            onClick={onClick}
        />
    )
}

export default ProgressiveImage;