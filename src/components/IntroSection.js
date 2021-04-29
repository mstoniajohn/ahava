import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import children from '../undraw_children.svg';
import people from '../undraw_hang_out_h9ud.png';

const IntroSection = () => {
	return (
		<Container className="p-3">
			<Row>
				<Col className="d-flex flex-column justify-content-center">
					<h2 className="text-center text-primary mb-2">Donate Today</h2>
					<h5>
						Construction on new Ahava Hope Foundation Headquarters in Grenada
					</h5>
				</Col>
				<Col>
					<iframe
						allowpaymentrequest=""
						frameborder="0"
						height="900px"
						name="donorbox"
						scrolling="no"
						title="donorbox"
						seamless="seamless"
						src="https://donorbox.org/embed/construction-on-new-ahava-hope-foundation-headquarters-in-grenada"
						style={{
							maxWidth: '500px',
							minWidth: ' 250px',
							maxHeight: 'none !important',
							margin: '0 auto',
						}}
						width="100%"
					></iframe>
				</Col>
			</Row>
			<Row className="d-flex align-items-center">
				<Col>
					<img width="400" src={children} alt="" />
				</Col>
				<Col>
					{' '}
					Ahava Hope Foundation is finally opening its facility in Grenada to
					house donations for those in need. The construction for this new
					facility is only in the beginning stages and we will like to ask you
					for your help to finish building swiftly.
				</Col>
			</Row>
			<Row className="d-flex align-items-center">
				<Col>
					To find out more about Ahava Hope, please visit email
					info@ahavahopefoundation.com. Thank you for helping AHF to make the
					world a better and more giving place.{' '}
				</Col>
				<Col>
					<img width="400" s src={people} alt="" />
				</Col>
			</Row>
		</Container>
	);
};

export default IntroSection;
