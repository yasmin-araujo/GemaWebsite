import React from 'react';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Img1 from './tripleg.jpg';
import Img2 from './time2.jpg';
import Img3 from './fimdocoffee.jpg';

import './style.css';

export default function NewsCard() {
	return (
		<div className="main">
			<div className="cards">
				<CardDeck>
					<Card border="warning">
						<Card.Img variant="top" src={Img1} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 14/09/2019</small>
						</Card.Footer>
					</Card>
					<Card border="warning">
						<Card.Img variant="top" src={Img2} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to additional content.{' '}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 09/11/2019</small>
						</Card.Footer>
					</Card>
					<Card border="warning">
						<Card.Img variant="top" src={Img3} />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
