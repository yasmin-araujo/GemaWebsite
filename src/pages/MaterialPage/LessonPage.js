import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import {Card} from 'react-bootstrap'

import './style.css';

// xs={12} sm={12} md={12} lg={12} xl={12}
function LessonPage() {
	return (
		<div id="main-material">
			<Container fluid id="cont">
				<Row>
					<Col>
						<Header />
                        <Row>
                            <Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                                <a id='link' class='pointer'> {'<'} Voltar </a>
                            </Col>
                        </Row>
					</Col>
				</Row>
                <div class="grow padding-top-2">
                    <Row>
                        <Col sm={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>

                            Placeholder
                        </Col>
                    </Row>
                </div>
				
				<Row className="footer-row">
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default LessonPage;
