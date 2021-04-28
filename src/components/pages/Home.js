import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import hand from '../../undraw_environment_iaus.svg';
import IntroSection from '../IntroSection';

const Home = () => {
	return (
		<>
			<Jumbotron fluid>
				<Container>
					<Row>
						<Col>
							<img width="400" src={hand} alt="" />
						</Col>
						<Col>
							<h1>
								Ahava Hope <span className="text-primary">Foundation</span>
							</h1>
							<p>
								Ahava Hope Foundation is a New York based IRS approved 501(c)3
								charity focused on education and charity work in Grenada.
							</p>
							Email us at{' '}
							<a href="mailto:info@ahavahopefoundation.org">
								info@ahavahopefoundation.org
							</a>
						</Col>
					</Row>
					<p className="text-center">
						<a
							style={{ borderRadius: '10px' }}
							className="btn btn-primary"
							href="https://donorbox.org/construction-on-new-ahava-hope-foundation-headquarters-in-grenada"
							target="_blank"
							rel="noopener noreferrer"
						>
							Donate Now
						</a>
					</p>
				</Container>
			</Jumbotron>
			<IntroSection />
		</>
	);
};

export default Home;
