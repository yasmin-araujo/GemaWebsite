import React from 'react';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import getNews, { getNewsCount } from './../NewsColumns/news';
import { getImage } from '../ImageUtils'
import './style.css';

let cards = []
export default function NewsCard() {
    let scrollToStart = (e) => {
		// e.preventDefault();
        let element = document.getElementById('backg');
		element.scrollIntoView({ behavior: 'auto', block: "start"});
    };
	
	for (let i = 0; i < 3; ++i) {
		const news = getNews(getNewsCount() - i); // pega as ultimas noticias, de tras pra frente
		cards.push(
			<Card>
				<Card.Img variant="top" src={getImage(news.imageCover)} />
				<Card.Body>
					<Card.Title>{news.title}</Card.Title>
					<Card.Text>{news.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Link to="/News" onClick={scrollToStart}>Saiba mais</Link>
				</Card.Footer>
			</Card>
		)
	}

	return (
		<div className="main">
			<div className="cards">
				<CardDeck>
					{cards}
				</CardDeck>
			</div>
		</div>
	);
}
