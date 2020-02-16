import React from 'react';
import Logo from '../../../src/images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './style.css';

export default function Header() {
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" id="mainNav">
				<Container>
					<Navbar.Brand className="navbar-brand">
						<a href="/" >
							<img alt="" src={Logo} className="d-inline-block align-top logo" />&nbsp;&nbsp; GEMA
						</a>
					</Navbar.Brand>
					<Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto navbar-nav">
							<Nav.Link href="/About">Sobre</Nav.Link>
							<Nav.Link href="/News">Notícias</Nav.Link>
							<Nav.Link href="/Material">Materiais</Nav.Link>
							<Nav.Link href="/Camp">Camp</Nav.Link>
							<Nav.Link href="/FAQ">FAQ</Nav.Link>
							<Nav.Link href="/Contact">Contato</Nav.Link>
							<Nav.Link href="/Contest">CF Tool</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
