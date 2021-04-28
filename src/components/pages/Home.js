import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Home = () => {
	return (
		<>
			<Jumbotron fluid>
				<Container>
					<h1>Ahava Hope Foundation</h1>
					<p>
						Ahava Hope Foundation is a New York based IRS approved 501(c)3
						charity focused on education and charity work in Grenada.
					</p>
					Email us at{' '}
					<a href="mailto:info@ahavahopefoundation.org">
						info@ahavahopefoundation.org
					</a>
				</Container>
			</Jumbotron>
		</>
	);
};

export default Home;
