import React, { useState, useEffect } from 'react';
import ProgressiveImage from './Modal/Image/Image';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function Gallery(props) {
    const { data } = props;
    const [isUsingPlaceholder, setUsingPlaceholder] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => { setUsingPlaceholder(true)}, 10000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const currentImageId = /\d/g.exec(location.pathname)?.at(0);
    let singleImage;
    if(currentImageId) {
        singleImage = data[parseInt(currentImageId)];
    }

    const seeImage = (direction) => {
        switch(direction) {
            case 'back':
                {
                    let previousImageId = parseInt(currentImageId) - 1;
                    if(previousImageId < 0) previousImageId = data.length - 1;
                    navigate(`/${previousImageId}`);
                    break;
                }
            case 'forward':
                {
                    let nextImageId = parseInt(currentImageId) + 1;
                    if(nextImageId >= data.length) nextImageId = 0;
                    navigate(`/${nextImageId}`);
                    break;
                }
            default:
                return;
        }
    }

    return (
        <>
        <div>Hello World</div>
        <div style={{textAlign: "center"}}>
            {data.map((e, index) => 
                <ProgressiveImage 
                    placeholderSrc={e.placeholderSrc}
                    src={isUsingPlaceholder ? e.src : undefined}
                    key={index}
                    onClick={() => { navigate(`/${index}`);}}
                />
            )}
        </div>
        <Outlet context={[singleImage, seeImage]}/>
        </>
    )
}

export default Gallery;