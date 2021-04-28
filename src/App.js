import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout.js/Header';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Container>
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</Container>
			</Router>
		</>
	);
}

export default App;
