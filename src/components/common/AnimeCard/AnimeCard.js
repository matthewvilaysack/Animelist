import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import { CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

{/* <a
				href={anime.url}
				target="_blank"
				rel="noreferrer">
				<figure>
					<img src={anime.image_url} />
				</figure>
				<h3>{anime.title}</h3>
			</a> */}

function AnimeCard({ anime }) {
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
						{/* make sure to add a link tothe anime's MAL profile. */}
						<a href={anime.title}>
							<Button href="#text-buttons" color="primary" size="medium">{anime.title}</Button>
						</a>
					</div>
					<Button color="primary" variant="contained">Add</Button>
					<div className="anime-card__score-container">
						score
					</div>
					<div className="anime-card__type">
						type
					</div>

				</CardActions>
			</CardActionArea>


		</Card>
	)
}
export default AnimeCard
