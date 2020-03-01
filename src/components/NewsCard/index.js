import React from 'react';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ImgAulas from '../../images/aulas_gema.jpg';
import ImgApresentacao from '../../images/chamada_apresentacao.jpg'
import Img3 from '../../images/gema_capa.png';
import getNews from './../NewsColumns/news';

import './style.css';

export default function NewsCard() {
    let scrollToStart = (e) => {
		// e.preventDefault();
        let element = document.getElementById('backg');
		element.scrollIntoView({ behavior: 'auto', block: "start"});
    };
	
	let n1 = getNews(1);
	let n5 = getNews(5);

	return (
		<div className="main">
			<div className="cards">
				<CardDeck>
					<Card>
						<Card.Img variant="top" src={ImgApresentacao} />
						<Card.Body>
							<Card.Title>{n5.title}</Card.Title>
							<Card.Text>{n5.resume}</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to="/News" onClick={scrollToStart}>Saiba mais</Link>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src={ImgAulas} />
						<Card.Body>
							<Card.Title>{n1.title}</Card.Title>
							<Card.Text>{n1.resume}</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to="/News" onClick={scrollToStart}>Saiba mais</Link>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src={Img3} />
						<Card.Body>
							<Card.Title>Sobre o GEMA</Card.Title>
							<Card.Text>
								Venha saber mais sobre o <strong>G</strong>rupo de <strong>E</strong>studos para a{' '}
								<strong>MA</strong>ratona de Programação!
							</Card.Text>
						</Card.Body>
						<Card.Footer>
                            <Link to="/About" onClick={scrollToStart}>Saiba mais</Link>
						</Card.Footer>
					</Card>
				</CardDeck>
			</div>
		</div>
	);
}
