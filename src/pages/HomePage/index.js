import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import NewsCard from '../../components/NewsCard/index';
import Footer from '../../components/Footer/index';
import ControlledCarousel from '../../components/ControlledCarousel/index';

import './style.css';
// xs={12} sm={12} md={12} lg={12} xl={12}

function HomePage() {
	return (
		<div className="main">
			<Container fluid>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row noGutters>
					<Col auto>
						<div id="backg" />
					</Col>
				</Row>
				<Row className="row-news">
					<Col>
						<h3>Notícias</h3>
						<NewsCard />
					</Col>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default HomePage;
