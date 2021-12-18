import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; // what the fuck is typography
import { CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import AnimeCardControls from '../AnimeCardControls/';

import Starrating from '../Starrating';
import { LineProgressBar } from '@frogress/line'




function AnimeCard({ anime, type }) {
	return (
		<Card className="anime-card">
			<div className="anime-card__ranking">#</div>
			<CardHeader avatar={
				<Avatar variant="square" className="anime-card__image" />
			}>
			</CardHeader>
			<CardActionArea>
				<CardActions>
					<div className="anime-card__title-container">
						<a href={anime.title}>
							{/* <Button href="#text-buttons" color="primary" size="medium">{anime.title}</Button> */}
						</a>
					</div>
					<div>
						{/* <Button color="primary" variant="contained">Add</Button> */}
					</div>
					<div className="anime-card__star-container">
						<Starrating />
					</div>
					<div className="anime-card__type">
						type

					</div>
					<div className="anime-card__progress">
						<LineProgressBar percent={2} rounded={18} height={9} />
					</div>
				</CardActions>
			</CardActionArea>
			<AnimeCardControls type={type} anime={anime} />
		</Card>
	)
}
export default AnimeCard
