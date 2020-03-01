import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from '../../components/Modal';
import getNews from './news';
// Imagens das capas
import Img1 from '../../images/time2.png';
import Img2 from '../../images/tripleg.jpg';
import ImgCamp from '../../images/camp_gema.jpg';
import ImgAulas from '../../images/aulas_gema.jpg'
import ImgApresentacao from '../../images/chamada_apresentacao.jpg'

import './style.css';

export default function NewsColumns() {
    // Variáveis referentes a cada notícia, sendo 1 (mais antiga) até n (mais nova)
	let n1 = getNews(1);
	let n2 = getNews(2);
	let n3 = getNews(3);
	let n4 = getNews(4);
	let n5 = getNews(5);

	return (
		<CardColumns>
            {/* Insira aqui novas notícias em ordem decrescente */}
			<Card>
				<Card.Img variant="top" src={ImgApresentacao} />
				<Card.Body>
					<Card.Title>{n5.title}</Card.Title>
					<Card.Text>{n5.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n5.title} body={n5.body} image1={n5.image1}/>
					<small className="text-muted news-data">{n5.date}</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src={ImgAulas} />
				<Card.Body>
					<Card.Title>{n1.title}</Card.Title>
					<Card.Text>{n1.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n1.title} body={n1.body} image1={n1.image1}/>
					<small className="text-muted news-data">{n1.date}</small>
				</Card.Footer>
			</Card>
			
			<Card>
				<Card.Img variant="top" src={ImgCamp} />
				<Card.Body>
					<Card.Title>{n4.title}</Card.Title>
					<Card.Text>{n4.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n4.title} body={n4.body} image1={n4.image1}/>
					<small className="text-muted news-data">{n4.date}</small>
				</Card.Footer>
			</Card>
			<Card style={{backgroundColor: 'var(--color-1-extra-light)'}} text="white" className="text-center p-3">
				<blockquote className="blockquote mb-0 card-body">
					<p>
						O Grupo de Estudos para a MAratona de Programação é um grupo de extensão do ICMC, sediado na USP
						de São Carlos, que treina para as principais competições de programação competitiva do país.
					</p>
					{/* <footer className="blockquote-footer">
						<small className="text-muted">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</small>
					</footer> */}
				</blockquote>
			</Card>
			<Card className="p-3">
				<Card.Img variant="top" src={Img2} />
				<Card.Body>
					<Card.Title>{n3.title}</Card.Title>
					<Card.Text>{n3.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n3.title} body={n3.body} image1={n3.image1}/>
					<small className="text-muted news-data">{n3.date}</small>
				</Card.Footer>
			</Card>
            {/* Diferentes estilos de card como exemplo */}
			
			<Card>
				<Card.Img variant="top" src={Img1} />
				<Card.Body>
					<Card.Title>{n2.title}</Card.Title>
					<Card.Text>{n2.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n2.title} body={n2.body} image1={n2.image1} image2={n2.image2}/>
					<small className="text-muted news-data">{n2.date}</small>
				</Card.Footer>
			</Card>
		
		</CardColumns>
	);
}
