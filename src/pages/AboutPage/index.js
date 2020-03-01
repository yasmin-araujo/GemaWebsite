import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from '../../images/gema_logo.png';
import Image from '../../images/icon.png';
import Image2 from '../../images/icon2.png';
import Image3 from '../../images/icon3.png';
import Image4 from '../../images/icon4.png';
import Image5 from '../../images/icon5.png';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function AboutPage() {

    //Funções scroll para cada seção
	let scrollTo0 = (e) => {
		e.preventDefault();
		let element = document.getElementById('maratona');
		element.scrollIntoView({ behavior: 'smooth', block: "start"});
	};
	let scrollTo1 = (e) => {
		e.preventDefault();
		let element = document.getElementById('comoParticipar');
		element.scrollIntoView({ behavior: 'smooth', block: "start"});
	};
	let scrollTo2 = (e) => {
		e.preventDefault();
		let element = document.getElementById('seletiva');
		element.scrollIntoView({ behavior: 'smooth', block: "start"});
	};
	let scrollTo3 = (e) => {
		e.preventDefault();
		let element = document.getElementById('obi');
		element.scrollIntoView({ behavior: 'smooth', block: "start"});
	};
	let scrollTo4 = (e) => {
		e.preventDefault();
		let element = document.getElementById('historico');
		element.scrollIntoView({ behavior: 'smooth', block: "start"});
	};

	return (
		<div id="main-about">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="title">Sobre</h1>
					</Col>
				</Row>
				<Row id="logo-row" noGutters>
					<Col
						// md={{ span: 5, offset: 0, order: 1 }}
						lg={{ span: 6, order: 1 }}
						sm={{ span: 10, order: 2 }}
						xs={{ span: 10, order: 2 }}
					>
						{/* <h2>O que é?</h2> */}
						<div>
							<p id="logo-phrase">
								O <strong>G</strong>rupo de <strong>E</strong>studos para a <strong>MA</strong>ratona de
								Programação é um grupo de extensão do ICMC, sediado na USP de São Carlos, que treina
								para as principais competições de programação competitiva do país, no estilo da Maratona
								de Programação da SBC.
							</p>
						</div>
					</Col>
					<Col
						// md={{ span: 3, offset: 0, order: 2 }}
						lg={{ span: 5, order: 2 }}
						sm={{ span: 10, order: 1 }}
						xs={{ span: 10, order: 1 }}
					>
						<img id="logo" src={Logo} alt="Gema" />
					</Col>
					{/* <Col md={{ span: 2, order: 3 }} sm={{ span: 1, order: 3 }} xs={{ span: 1, order: 3 }} /> */}
				</Row>
				<Row>
					<Col>
						<Jumbotron fluid id="jumbo-about">
							<Container fluid>
								<Row id="icons-row" noGutters>
									<Col>
										<a href="#" onClick={scrollTo0}>
											<div className="about-icons">
												<img src={Image} alt="" />{' '}
											</div>
											<p>O que é a Maratona?</p>
										</a>
									</Col>
									<Col>
										<a href="#" onClick={scrollTo1}>
											<div className="about-icons">
												<img src={Image2} alt="" />{' '}
											</div>
											<p>Como Participar?</p>
										</a>
									</Col>
									<Col>
										<a href="#" onClick={scrollTo2}>
											<div className="about-icons">
												<img src={Image3} alt="" />{' '}
											</div>
											<p>Seletiva</p>
										</a>
									</Col>
									<Col>
										<a href="#" onClick={scrollTo3}>
											<div className="about-icons">
												<img src={Image4} alt="" />{' '}
											</div>
											<p>OBI</p>
										</a>
									</Col>
									<Col>
										<a href="#" onClick={scrollTo4}>
											<div className="about-icons">
												<img src={Image5} alt="" />{' '}
											</div>
											<p>Histórico</p>
										</a>
									</Col>
								</Row>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
				<Row id="maratona" >
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h3>O que é a Maratona?</h3>
						<p>
							Maratona de Programação é o nome dado às fases brasileiras de uma competição universitária
							que internacionalmente recebe o nome de ICPC -{' '}
							<a href="https://icpc.baylor.edu/">International Collegiate Programming Contest</a>. Nela,
							os competidores colocam à prova seus conhecimentos e habilidades de programação, algoritmos,
							estruturas de dados, matemática, lógica e resolução de problemas. O objetivo é, dado um
							conjunto de problemas propostos (o qual costumamos chamar de "prova" ou "contest"), resolver
							corretamente o maior número possível, o mais rápido possível, num determinado período de
							tempo. No caso específico da Maratona, são em torno de 10 problemas e 5h para resolvê-los em
							times de três pessoas. Os problemas são resolvidos escrevendo programas, e só há um
							computador por time. Ou seja: trabalho em equipe e uso inteligente do computador também
							entram na conta.
						</p>
						<p>
							Trata-se de uma competição muito prestigiada: as universidades com times de melhor
							desempenho ganham reconhecimento nacional e mundial, e muitas tech giants apoiam e/ou
							desenvolvem suas próprias competições similares ao ICPC, valorizando a contratação de
							profissionais que tenham background nessas competições. Algumas pessoas, como o{' '}
							<a href="https://www.quora.com/How-did-Adam-DAngelo-learn-algorithms-before-attending-Caltech/answer/Adam-DAngelo">
								ex-CTO do Facebook e fundador do Quora
							</a>, defendem que a programação competitiva - como é chamada - é a melhor maneira de
							aprender algoritmos. Para saber mais, você pode começar lendo o{' '}
							<a href="https://en.wikipedia.org/wiki/Competitive_programming">
								artigo na Wikipédia sobre programação competitiva (em inglês)
							</a>{' '}
							e a seção{' '}
							<a href="http://maratona.ime.usp.br/sobre19.html">
								Sobre na página oficial da Maratona de Programação
							</a>.
						</p>
						<p>
							Essas competições NÃO são hackathons! Estas têm propostas e objetivos diferentes. Não
							confunda!
						</p>
					</Col>
				</Row>
				<Row id="comoParticipar">
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h3>Como participar?</h3>
						<p>
							O GEMA não tem processo seletivo. Nós fazemos reuniões semanais onde discutimos problemas ou
							tópicos relevantes para a maratona. Todos são bem-vindos nessas reuniões, mas atenção: elas
							frequentemente abordam temas avançados, portanto se você estiver começando ou pensando em
							começar no mundo da maratona, a chance de você ficar perdido é alta. Não se intimide!
							Sinta-se livre para conversar e tirar dúvidas com qualquer um de nós. As reuniões
							normalmente são marcadas no nosso{' '}
							<a href="https://www.facebook.com/gemaicmc/">grupo no Facebook</a>.
						</p>
						<p>
							No primeiro semestre de todo ano, normalmente preparamos aulas e provas especiais dedicadas
							aos bixos (e a quem mais queira começar). As informações sobre as mesmas também serão
							postadas no grupo.
						</p>
						<p>
							Para participar da <a href="#maratona">Maratona de Programação</a> propriamente dita
							representando a USP-São Carlos, você precisa fazer a <a href="#seletiva">seletiva</a>{' '}
							<strong>ou</strong> ganhar uma das vagas que damos aos bixos com melhor desempenho nas
							nossas provas introdutórias.
						</p>
					</Col>
				</Row>
				<Row id="seletiva">
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h3>Seletiva</h3>
						
						<p>
							Para determinar os alunos que irão representar a USP-São Carlos na{' '}
							<a href="maratona">Maratona de Programação</a>, o GEMA promove uma prova presencial muito
							similar à Maratona, porém individual e de menor duração, chamada de “seletiva”, na qual os
							(normalmente os 18) alunos de melhor desempenho ganharão vaga na Maratona. Note que, para
							ganhar a vaga, o aluno precisa estar regularmente matriculado na USP, e satisfazer os{' '}
							<a href="http://maratona.ime.usp.br/sobre19.html">
								requisitos de participação da própria competição
							</a>.
						</p>
						<p>
							Todos são livres para fazer a seletiva caso desejem, mesmo não querendo/podendo participar
							da Maratona. Para se inscrever...{' '}
						</p>
						<p>
							Nossas seletivas mais recentes estão disponíveis no Codeforces. Lá, é possível ver os
							problemas e resolvê-los:
						</p>
						<br />
						<ListGroup horizontal>
							<ListGroup.Item action href="https://codeforces.com/gym/102302">
								2019
							</ListGroup.Item>
							<ListGroup.Item action href="https://codeforces.com/gym/101875">
								2018
							</ListGroup.Item>
							<ListGroup.Item action href="https://codeforces.com/gym/101484">
								2017
							</ListGroup.Item>
							<ListGroup.Item action href="https://codeforces.com/gym/101063">
								2016
							</ListGroup.Item>
							<ListGroup.Item action href="https://codeforces.com/gym/100733">
								2015
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
				<Row id="obi">
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h3>OBI</h3>
						
						<p>
							A <a href="http://olimpiada.ic.unicamp.br/">
								OBI - Olimpíada de Brasileira de Informática
							</a>{' '}
							é uma competição dedicada principalmente aos alunos de ensino fundamental e médio, porém que
							também permite que alunos que estejam cursando o <strong>primeiro</strong> ano de seu{' '}
							<strong>primeiro</strong> curso de graduação participem na categoria “Programação - Sênior”.
							Nessa categoria, a olimpíada é similar à <a href="#maratona">Maratona de Programação</a>,
							exceto que é individual e que a correção das soluções e a divulgação do placar são feitas
							posteriormente, e não ao vivo.
						</p>
						<p>
							Se você cumpre os requisitos e quer participar da OBI pelo ICMC-USP, basta se inscrever! A
							competição é anual e normalmente começa no final do primeiro semestre. As provas são
							realizadas no ICMC.
						</p>
					</Col>
				</Row>
				<Row id="historico">
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
						<h3>Histórico</h3>
						<h5>Notícias do GEMA pelo ICMC</h5>
						<ListGroup variant="flush">
							<ListGroup.Item
								action
								href="https://www.icmc.usp.br/noticias/4728-alunos-do-icmc-garantem-vaga-para-competicao-mundial-de-programacao-na-russia"
							>
								Alunos do ICMC garantem vaga para competição mundial de programação na Rússia
							</ListGroup.Item>
							<ListGroup.Item
								action
								href="https://www.icmc.usp.br/en/noticias/4021-o-melhor-time-de-programacao-da-america-latina-e-da-usp-sao-carlos"
							>
								O melhor time de programação da América Latina é da USP São Carlos
							</ListGroup.Item>
							<ListGroup.Item
								action
								href="https://www.icmc.usp.br/en/noticias/3411-programacao-e-com-eles-time-da-usp-sao-carlos-esta-entre-os-melhores-da-america-latina"
							>
								Programação é com eles: time da USP São Carlos está entre os melhores da América Latina
							</ListGroup.Item>
							<ListGroup.Item
								action
								href="https://icmc.usp.br/es/noticias/2128-icmc-conquista-medalha-de-ouro-na-maratona-de-programacao"
							>
								ICMC conquista medalha de ouro na Maratona de Programação
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

export default AboutPage;
