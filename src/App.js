import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout.js/Header';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout.js/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<>
			<Router>
				<Header />

				<main style={{ minHeight: '80vh' }}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
};

export default App;
