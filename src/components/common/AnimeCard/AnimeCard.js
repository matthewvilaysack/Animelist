import React from 'react'
import AnimeCardControls from '../AnimeCardControls/';


function AnimeCard({ anime, type }) {
	return (
		<div className="anime-card">
			<div className="overlay"></div>
				<img src={anime.image_url} alt={anime.title} />
			<AnimeCardControls type={type} anime={anime} />
		</div>
	)
}
export default AnimeCard
