import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import NewsCard from '../../components/NewsCard/index';
import Footer from '../../components/Footer/index';
// import Logo_Facebook from '../../images/facebook_icon.png';
// import Logo_Github from '../../images/github_icon.png';

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
				<Row>
					<Col>
						<div id="backg">
							{/* <Container id="logo-container" fluid>
								<Row>
									<Col md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }} id="logo-col">
										<ul className="list-inline social-buttons">
											<li className="list-inline-item">
												<a href="https://www.facebook.com/gemaicmc/">
													<img src={Logo_Facebook} alt="Facebook" className="logos" />
												</a>
											</li>
											<li className="list-inline-item">
												<a href="https://github.com/lusmoura/CompetitiveProgramming-Classes">
													<img src={Logo_Github} alt="Github" className="logos" />
												</a>
											</li>
										</ul>
									</Col>
								</Row>
							</Container> */}
						</div>
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