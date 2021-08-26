import React, { useState } from 'react'
import AnimeCard from '../AnimeCard';



function MainContent(props) {
	let [searchChars, setSearchChars] = useState([]);
	const HandleNumSearchChars = e => {
		searchChars = new Array(e.target.value.length);
		if (searchChars.length > 3) {
			props.SetSearch(e.target.value);
			console.log('over')
		}
		console.log(searchChars.length);
	}
	return (
		<main>
			<div className="main-head">
				<form
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => {
							HandleNumSearchChars(e)
							props.SetSearch(e.target.value);
						}
						}
					/>
				</form>

			</div>
			<div className="anime-list">
				{/* if searchChars.length is 3, load blank search.
				if searchChars.length is not 3, then load anime cards.
			 */}
				{searchChars.length > 3 ? searchChars.map(anime => {
					return (<AnimeCard
						anime={anime}
						key={anime.mal_id}
					/>)
				}) :
					() => {
						return (
							<div className="blank-search">There's nothing here..</div>
						)
					}
				}
			</div>
		</main>
	)
}

export default MainContent
