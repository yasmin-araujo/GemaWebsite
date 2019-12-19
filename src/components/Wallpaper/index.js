import React from 'react';
import Image from 'react-bootstrap/Image';
import WallpaperImage from '../../images/Wallpaper2.png';

import './style.css';

export default function Wallpaper() {
    return (
        <>
        <p><br></br></p>
        <Image src={WallpaperImage} fluid />
        </>
    );
}
