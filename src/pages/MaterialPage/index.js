import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function MaterialPage() {
	return (
		<div id="main-material">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="title">Materiais</h1>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h3>Introdução à Programação Competitiva</h3>
						<p className="quote">
							"Dado um problema de programação já conhecido, resolva ele no menor tempo possível."
						</p>
						<p>
							O estudo em programação competitiva se baseia em várias técnicas e algoritmos. Além de
							conhecê-los, também é importante uma constante prática, para que o tempo que se gasta em
							cada problema seja menor.
						</p>
						<h4>Essências de um problema</h4>
						<p>
							Certo, você irá resolver um problema. Para se familiarizar melhor com eles, aqui vai um
							resumo de como eles costumam aparecer. Normalmente, os enunciados de problemas apresentam a
							seguinte forma:
						</p>
					</Col>
				</Row>
				<Row>
					<Col id="links-col" sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h5>Links relevantes</h5>
						<ListGroup variant="flush">
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
