import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import MainContent from './components/common/MainContent';
import Gallery from './components/common/Gallery';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json())

		SetTopAnime(temp.top.slice(0, 5)); // i might change this number. 
	}



	const HandleSearch = e => {
		e.preventDefault();


		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=5`)
			.then(res => res.json());
		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Gallery topAnime={topAnime} animeList={animeList} />
				<Sidebar
					topAnime={topAnime} />
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
		</div>

	)
}

export default App;
