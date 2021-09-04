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
			</Router>
		</GlobalProvider>
		// <div className="App">
		// 	<Header />
		// 	<div className="content-wrap">
		// 		<Gallery topAnime={topAnime} animeList={animeList} />
		// 		<Sidebar
		// 			topAnime={topAnime} />
		// 		<MainContent
		// 			HandleSearch={HandleSearch}
		// 			search={search}
		// 			SetSearch={SetSearch}
		// 			animeList={animeList} />
		// 	</div>
		// </div>

	)
}

export default App;
