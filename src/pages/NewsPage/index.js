import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Modal from '../../components/Modal';
import NewsColumns from '../../components/NewsColumns';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function NewsPage() {
	return (
		<div id="main-news">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="title">Notícias</h1>
					</Col>
				</Row>
				<Row>
					<Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                        <NewsColumns/>
					</Col>
				</Row>
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default NewsPage;
