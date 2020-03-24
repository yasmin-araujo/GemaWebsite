import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Jumbotron from 'react-bootstrap/Jumbotron';
import EmailIcon from '../../images/email_icon.png';
import FacebookIcon from '../../images/facebook_icon2.png';
import GithubIcon from '../../images/github_icon2.png';
import MessengerIcon from '../../images/messenger_icon.png';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function ContactPage() {
	return (
		<div id="main-contact">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col>
						<h1 className="title">Contato</h1>
					</Col>
				</Row>

                <Row>
					<Col>
						<Jumbotron fluid id="jumbo-about">
							<Container fluid>
								<Row id="icons-row" noGutters>
									<Col>
										<a href="https://www.facebook.com/gemaicmc/" rel="noopener noreferrer" target="_blank">
											<div className="about-icons">
												<img src={FacebookIcon} alt="" />{' '}
											</div>
											<p>Facebook</p>
										</a>
									</Col>
									<Col>
										<a href="https://github.com/icmcgema" rel="noopener noreferrer" target="_blank">
											<div className="about-icons">
												<img src={GithubIcon} alt="" />{' '}
											</div>
											<p>Github</p>
										</a>
									</Col>
									<Col>
										<a href="https://m.me/gemaicmc?fbclid=IwAR1sYp6wayedc_zLrOQ65nr4d0mpc4dgTHXOBEs6m-jUktijZJQipieSs_U" rel="noopener noreferrer" target="_blank">
											<div className="about-icons">
												<img src={MessengerIcon} alt="" />{' '}
											</div>
											<p>Messenger</p>
										</a>
									</Col>
									<Col><a href="mailto:gema@icmc.usp.br">
										
											<div className="about-icons">
												<img src={EmailIcon} alt="" />{' '}
											</div>
											<p>gema@icmc.usp.br</p></a>
									</Col>
								</Row>
							</Container>
						</Jumbotron>
					</Col>
				</Row>

				{/* <Row>
					<Col
						className="contact-col"
						md={{ span: 5, offset: 1 }}
						sm={{ span: 5, offset: 1 }}
						xs={{ span: 10, offset: 1 }}
					>
						<div>
							<p>
								<a href="https://www.facebook.com/gemaicmc/">
									<span>
										<img className="icon-img" src={FacebookIcon} />{' '}
									</span>&nbsp;Link do Facebook
								</a>
							</p>
							<p>
								<span>
									<img className="icon-img" src={GithubIcon} />{' '}
								</span>&nbsp;
								<a href="https://github.com/lusmoura/CompetitiveProgramming-Classes">Link do Github</a>
							</p>
						</div>
					</Col>

					<Col
						className="contact-col"
						md={{ span: 5, offset: 1 }}
						sm={{ span: 5, offset: 1 }}
						xs={{ span: 10, offset: 1 }}
					>
						<div>
							<p>
								<span>
									<img className="icon-img" src={EmailIcon} />{' '}
								</span>&nbsp;gema@icmc.usp.br
							</p>
							<p>
								<span>
									<img className="icon-img" src={MessengerIcon} />{' '}
								</span>&nbsp;
								<a href="https://m.me/gemaicmc?fbclid=IwAR1sYp6wayedc_zLrOQ65nr4d0mpc4dgTHXOBEs6m-jUktijZJQipieSs_U">
									Entre em contato pelo Messenger
								</a>
							</p>
						</div>
					</Col>
                </Row> */}
                
				<Row>
					<Col
						id="map-col"
						// md={{ span: 12, offset: 0 }}
						sm={{ span: 12, offset: 0 }}
						xs={{ span: 12, offset: 0 }}
					>
						<iframe
							id="map"
							src="https://maps.google.com/maps?q=icmc&t=&z=16&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							allowfullscreen
						/>
					</Col>
				</Row>
               
				{/* <Row>
					<Col md={{ span: 5, offset: 1 }} sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
						<p>
							<span>
								<img className="icon-img" src={EmailIcon} />{' '}
							</span>&nbsp;gema@icmc.usp.br
						</p>
						<p>
							<a href="https://www.facebook.com/gemaicmc/">
								<span>
									<img className="icon-img" src={FacebookIcon} />{' '}
								</span>&nbsp;Link do Facebook
							</a>
						</p>
						<p>
							<span>
								<img className="icon-img" src={GithubIcon} />{' '}
							</span>&nbsp;
							<a href="https://github.com/lusmoura/CompetitiveProgramming-Classes">Link do Github</a>
						</p>
						<p>
							<span>
								<img className="icon-img" src={MessengerIcon} />{' '}
							</span>&nbsp;
							<a href="https://m.me/gemaicmc?fbclid=IwAR1sYp6wayedc_zLrOQ65nr4d0mpc4dgTHXOBEs6m-jUktijZJQipieSs_U">
								Entre em contato pelo Messenger
							</a>
						</p>
					</Col>
					<Col
						id="map-col"
						md={{ span: 5, offset: 0 }}
						sm={{ span: 10, offset: 1 }}
						xs={{ span: 10, offset: 1 }}
					>
						<iframe
							id="map"
							src="https://maps.google.com/maps?q=icmc&t=&z=15&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							allowfullscreen
						/>
					</Col>
				</Row>
				 */}
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default ContactPage;
