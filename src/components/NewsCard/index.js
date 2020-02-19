import React from 'react';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Img1 from '../../images/tripleg.jpg';
import Img2 from '../../images/time2.png';
import Img3 from '../../images/gema_capa.png';

import './style.css';

export default function NewsCard() {
    let scrollToStart = (e) => {
		// e.preventDefault();
        let element = document.getElementById('backg');
		element.scrollIntoView({ behavior: 'auto', block: "start"});
    };
    
	return (
		<div className="main">
			<div className="cards">
				<CardDeck>
					<Card>
						<Card.Img variant="top" src={Img1} />
						<Card.Body>
							<Card.Title>Mais um ano de medalha para o GEMA!</Card.Title>
							<Card.Text>
								O time "Triple G" foi muito bem na final nacional, ganhando medalhas de prata e com
								chances de ir para a fase mundial!
							</Card.Text>
						</Card.Body>
						<Card.Footer>
                            <Link to="/News" onClick={scrollToStart}>Saiba mais</Link>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src={Img2} />
						<Card.Body>
							<Card.Title>O GEMA classificou para a nacional!</Card.Title>
							<Card.Text>
								Confira os times que conseguiram se classificar para a final brasileira da competição!{' '}
							</Card.Text>
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
								Vennha saber mais sobre o <strong>G</strong>rupo de <strong>E</strong>studos para a{' '}
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
