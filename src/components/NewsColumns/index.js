import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from '../../components/Modal';
import getNews from './news';
// Imagens das capas
import Img1 from '../../images/time2.png';
import Img2 from '../../images/tripleg.jpg';
import Img3 from '../../images/gema_capa.png';

import './style.css';

export default function NewsColumns() {
	let n1 = getNews(1);
	let n2 = getNews(2);

	return (
		<CardColumns>
            {/* Insira aqui novas notícias em ordem decrescente */}
			<Card>
				<Card.Img variant="top" src={Img2} />
				<Card.Body>
					<Card.Title>{n2.title}</Card.Title>
					<Card.Text>{n2.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n2.title} body={n2.body} image1={n2.image1} image2={n2.image2}/>
					<small className="text-muted news-data">00/00/00</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src={Img1} />
				<Card.Body>
					<Card.Title>{n1.title}</Card.Title>
					<Card.Text>{n1.resume}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Modal title={n1.title} body={n1.body} image1={n1.image1} image2={n1.image2}/>
					<small className="text-muted news-data">00/00/00</small>
				</Card.Footer>
			</Card>
            {/* Diferentes estilos de card como exemplo */}
			<Card className="p-3">
				<blockquote className="blockquote mb-0 card-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
					<footer className="blockquote-footer">
						<small className="text-muted">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</small>
					</footer>
				</blockquote>
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
			<Card className="text-center">
				<Card.Body>
					<Card.Title>Título</Card.Title>
					<Card.Text>
                        Insira aqui uma informação muito importante sobre o prestigiadíssimo grupo GEMA.{' '}
					</Card.Text>
					<Card.Text>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img src={Img3} />
			</Card>
			<Card className="text-right">
				<blockquote className="blockquote mb-0 card-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
					<footer className="blockquote-footer">
						<small className="text-muted">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</small>
					</footer>
				</blockquote>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Mais um título</Card.Title>
					<Card.Text>
                        Esse é outro card de exemplo pra colocar mais uma incrível notícia sobre o GEMA. Rosas são vermelhas, 
                        violetas são azuis, vamo vamo gema ganhar medalha que reluz.
					</Card.Text>
					<Card.Text>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Text>
				</Card.Body>
			</Card>
		</CardColumns>
	);
}
