import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/common/Header';
import Watchlist from './components/common/Watchlist'
import Watched from './components/common/Watched'
import Add from './components/common/Add'
import './assets/css/main.css'
import './lib/font-awesome/css/all.min.css'

import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Router>
				<div className="app-container">
					<Header />
					<Switch>
						<Route exact path="/">
							<Watchlist />
						</Route>
						<Route path="/add">
							<Add />
						</Route>
						<Route path="/watched">
							<Watched />
						</Route>
					</Switch>
				</div>
			</Router>
		</GlobalProvider>
	)
}

export default App;
