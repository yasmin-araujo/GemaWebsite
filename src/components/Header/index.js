import React from 'react';
import Logo from '../../../src/images/logo.png'
import Link from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './style.css';

export default function Header() {
	return (
		<header>
			{/* <img src="" alt="Logo" /> */}
			{/* <h3>GEMA</h3> */}
			{/* <Link to="/">Home</Link>
				<Link to="/management">Gerenciar</Link>
                <Link to="/login">Sair</Link> */}

			<Navbar collapseOnSelect expand="lg" id="mainNav">
				<Container>
					<Navbar.Brand className="navbar-brand">
						<img src={Logo} className="d-inline-block align-top logo"/>&nbsp;&nbsp; GEMA
					</Navbar.Brand>
					<Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto navbar-nav">
							<Nav.Link href="#sobre">Sobre</Nav.Link>
							<Nav.Link href="#noticias">Notícias</Nav.Link>
							<Nav.Link href="#camp">Camp</Nav.Link>
							<Nav.Link href="#faq">FAQ</Nav.Link>
							<Nav.Link href="#contato">Contato</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
