import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function FaqPage() {
	return (
		<div className="main">
			<Container fluid>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row className="header-space" />
				<Row>
					<Col>
						<h1 className="title">FAQ</h1>
					</Col>
				</Row>
				<Row>
					<Col className="accordion-col">
						<Accordion>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									Quanta dedicação é necessária para participar do GEMA?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										Quanto você quiser. Não há compromisso em ir às nossas reuniões e participar das
										nossas outras atividades. Você provavelmente aprenderá algo novo mesmo sem
										intenção de se dedicar à programação competitiva. Agora, se seu objetivo for ir
										bem nas competições e estar entre os melhores, você terá que treinar bastante.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									Qual linguagem de programação se usa em programação competitiva?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										C++. É usado pela grande maioria dos competidores e por
										todos do GEMA. Quase todo material sobre programação competitiva estará em C++.
										As aulas que organizamos para os bixos são nessa linguagem, e é a que
										recomendamos para quem queira começar. <br />
										<br />
										A segunda linguagem mais utilizada é provavelmente Java.
										Para fins de programação competitiva a mesma tem versatilidade similar a do C++,
										mas em geral é mais lenta e requer que você digite mais, fatores que podem fazer
										a diferença.<br /><br></br>
										Outras linguagens, como Python, não são impossíveis de
										serem utilizadas mas provavelmente apresentarão dificuldades a mais na
										implementação de problemas mais complicados.<br /><br></br>
										Excepcionalmente, vez ou outra aparece um problema que é
										mais facilmente resolvido em Java ou Python do que em C++, ocasião em que muitos
										competidores trocam temporariamente de linguagem para resolver aquele problema
										em particular.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									Preciso ser aluno do BCC / ICMC / … para participar do GEMA?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>Não. Ver Como participar?</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default FaqPage;
