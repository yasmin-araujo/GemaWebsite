import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useRouteMatch } from 'react-router-dom';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function MaterialPage() {
	const { url } = useRouteMatch();
    let classes = [];
    
    // Para adicionar novos links de aulas insira no final do array classes conforme o formato a seguir
	classes.push({ title: 'Introdução', url: `${url}/Aula/Introducao` });
	classes.push({ title: 'Programação C/C++', url: `${url}/Aula/Programacao_C-C++` });
	classes.push({ title: 'Repetição', url: `${url}/Aula/Repeticao` });
	classes.push({ title: 'Arrays e Strings', url: `${url}/Aula/Arrays_Strings` });
	classes.push({ title: 'Funções e Recursão', url: `${url}/Aula/Funcoes_Recursao` });
	// classes.push({ title: 'Nome da aula', url: `${url}/Aula/url da aula` });

	return (
		<div id="main-material">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>

				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h1 className="title">Materiais</h1>
						<h3>A Programação Competitiva</h3>
						<p className="quote">
							"Dado um problema de programação já conhecido, resolva ele no menor tempo possível."
						</p>
						<p>
							O estudo em programação competitiva se baseia em várias técnicas e algoritmos. Além de
							conhecê-los, também é importante uma constante prática, para que o tempo que se gasta em
							cada problema seja menor. Nos links abaixo você encontra alguns materiais preparados pelo
							GEMA para te auxiliar nesses estudos:
						</p>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm={{ span: 5, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<ListGroup className="material-links first">
							{classes.slice(0, Math.ceil(classes.length/2)).map((c) => (
								<ListGroup.Item action href={c.url}>
									{c.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
					<Col sm={{ span: 5, offset: 0 }} xs={{ span: 10, offset: 1 }}>
						<ListGroup className="material-links">
							{classes.slice(Math.ceil(classes.length/2), classes.lastIndex).map((c) => (
								<ListGroup.Item action href={c.url}>
									{c.title}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
				</Row>
				<Row>
					<Col id="links-col" sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h5>Links relevantes</h5>
						<ListGroup variant="flush">
							<ListGroup.Item action href="https://github.com/icmcgema">
								GitHub do GEMA
							</ListGroup.Item>
							<ListGroup.Item action href="https://github.com/andrefakhoury">
								GitHub do Fakhoury
							</ListGroup.Item>
							<ListGroup.Item action href="https://github.com/VictorXjoeY">
								GitHub do Forbes
							</ListGroup.Item>
							<ListGroup.Item action href="https://github.com/LoppA">
								GitHub do LoppA
							</ListGroup.Item>
							<ListGroup.Item action href="https://github.com/lusmoura">
								GitHub da lmoura
							</ListGroup.Item>
							<ListGroup.Item action href="https://github.com/thiagop-usp">
								GitHub do Preischadt
							</ListGroup.Item>
							<ListGroup.Item action href="https://github.com/davidcairuz">
								GitHub do David
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default MaterialPage;
