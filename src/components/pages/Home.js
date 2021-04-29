import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import hand from '../../undraw_environment_iaus.svg';
import IntroSection from '../IntroSection';

const Home = () => {
	return (
		<>
			<Jumbotron fluid>
				<div className="container">
					<div className="grid-2">
						<div>
							<img src={hand} alt="" />
						</div>
						<div>
							<h1>
								Ahava Hope <span className="text-primary">Foundation</span>
							</h1>
							<p>
								Ahava Hope Foundation is a New York based IRS approved 501(c)3
								charity focused on education and charity work in Grenada.
							</p>
							<p>
								Email us at{' '}
								<a href="mailto:info@ahavahopefoundation.org">
									info@ahavahopefoundation.org
								</a>
							</p>
						</div>
					</div>
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
				</div>
			</Jumbotron>
			<IntroSection />
		</>
	);
};

export default Home;
