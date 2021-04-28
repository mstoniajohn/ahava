import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout.js/Header';

import Home from './components/pages/Home';
import About from './components/pages/About';

const App = () => {
	return (
		<>
			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
