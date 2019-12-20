import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function ContactPage() {
	return (
		<div id="main-contact">
			<Container fluid>
				<Row>
					<Col>
						<Header />
					</Col>
				</Row>
                <Row className="footer-row">
                        <Footer/>
                </Row>
			</Container>
		</div>
	);
}

export default ContactPage;