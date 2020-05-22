import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from '../../components/Modal';
import { getImage } from '../ImageUtils'
import getNews, { getNewsCount } from './news';

import './style.css';

const cards = []
export default function NewsColumns() {
	// O conteúdo dessa página é estático, então só é necessário construí-lo uma vez
	for (let i = 0; i < 5; ++i) {
		const news = getNews(getNewsCount() - i) // pega as ultimas noticias, de tras pra frente
		
		cards.push(
			<Card>
				<Card.Img variant="top" src={getImage(news.imageCover)} />
				<Card.Body>
					<Card.Title>{news.title}</Card.Title>
					<Card.Text>{news.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={news.title} body={news.body} image1={news.image1}/>
					<small className="text-muted news-data">{news.date}</small>
				</Card.Footer>
			</Card>
		)
		if (i === 2) {
			cards.push(
				<Card style={{backgroundColor: 'var(--color-1-extra-light)'}} text="white" className="text-center p-3">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							O Grupo de Estudos para a MAratona de Programação é um grupo de extensão do ICMC, sediado na USP
							de São Carlos, que treina para as principais competições de programação competitiva do país.
						</p>
					</blockquote>
				</Card>
			);
		}
	}

	return (
		<CardColumns>
			{cards}
		</CardColumns>
	);
}
