import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../images/tripleg.jpg';
import Img2 from '../../images/time2.png';
import Img3 from '../../images/gema_capa.png';

import './style.css';

export default function ControlledCarousel() {
	const [ index, setIndex ] = React.useState(0);
	const [ direction, setDirection ] = React.useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	return (
		<Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block w-100" src={Img3} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Img2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Img1} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
}
