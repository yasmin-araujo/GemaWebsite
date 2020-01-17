import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import ImgCamp from '../../images/camp.png';
import ImgPublico from '../../images/publico-alvo.png';
import ImgInscricao from '../../images/inscricao.png';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function CampPage() {
	return (
		<div id="main-camp">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="title">Training Camp</h1>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h3>O que é o Training Camp?</h3>
					</Col>
				</Row>
				<Row className="camp-row">
					<Col md={{ span: 7, offset: 1 }} sm={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
						<p>
							A ideia do <strong>training camp</strong> do GEMA é apresentar o que é programação
							competitiva, como estudar para a modalidade, as competições da área, e oferecer aulas sobre
							os tópicos mais usualmente abordados nestas competições. Todos os dias, simulados serão
							feitos pelos alunos durante o período da tarde, ao estilo de outros training camps de
							renome, para a fixação do conteúdo aprendido nas aulas e de forma que o aluno possa sentir a
							experiência de uma competição.
						</p>
					</Col>
					<Col md={{ span: 3, offset: 0 }} sm={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
						{/* Imagem */}
						<img className="camp-img" src={ImgCamp} alt="" />
					</Col>
					<Col sm={{ span: 1, order: 3}} xs={{ span: 1 , order: 3}}>
					</Col>
				</Row>
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
					</Col>
				</Row>
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h3>Público Alvo</h3>
					</Col>
				</Row>
				<Row className="camp-row">
					<Col md={{ span: 3, offset: 1, order: 1 }} sm={{ span: 10, offset: 1, order: 2 }} xs={{ span: 10, offset: 1, order: 2 }}>
						{/* Imagem */}
						<img className="camp-img" src={ImgPublico} alt="" />
					</Col>
					<Col md={{ span: 7, offset: 0, order: 2 }} sm={{ span: 10, offset: 1, order: 1 }} xs={{ span: 10, offset: 1, order: 1 }}>
						<p>
							O training camp é aberto para todos os interessados! Porém, durante as aulas iremos assumir
							que os alunos são familiarizados com o básico de lógica de programação. Abriremos duas
							turmas: na turma de C++ podem se inscrever quem já teve algum contato com a linguagem, e
							nela iremos nos aprofundar mais nos assuntos relacionados à maratona; a turma de Python é
							direcionada para aqueles que já sabem Python ou que não tem conhecimento de nenhuma
							linguagem de programação, pois para esta turma será ensinado tanto a linguagem (focando mais
							nos aspectos utilizados em programação competitiva) quanto os assuntos da maratona.
						</p>
					</Col>
					<Col sm={{ span: 1, order: 3}} xs={{ span: 1 , order: 3}}>
					</Col>
				</Row>
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<hr />
					</Col>
				</Row>
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<h3>Inscrições</h3>
					</Col>
				</Row>
				<Row className="camp-row">
					<Col md={{ span: 7, offset: 1 }} sm={{ span: 10, offset: 1 }}  xs={{ span: 10, offset: 1 }}>
						<p>As inscrições para o curso esse ano já foram encerradas!</p>
					</Col>
					<Col md={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} xs={{ span: 10, offset: 1}}>
						{/* Imagem */}
						<img className="camp-img" src={ImgInscricao} alt="" />
					</Col>
					<Col sm={{ span: 1, order: 3}} xs={{ span: 1 , order: 3}}>
					</Col>
				</Row>
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default CampPage;
