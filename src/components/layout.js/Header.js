import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<Link>Ahava Hope Foundation</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link>
						<Link to="/">Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/about">About Us</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
