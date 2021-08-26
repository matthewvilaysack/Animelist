import React from 'react'


function Sidebar({ topAnime }) {
	return (
		<aside className="sidebar">
			<ul className="sidebar-nav">
				<h3>Filters</h3>
				{topAnime.map(anime => (
					<li className="sidebar-nav__item" key={anime.mal_id}>
						<a
							className="sidebar-nav__link"
							href={anime.url}
							target="_blank"
							rel="noreferrer">
							{anime.title}
						</a>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default Sidebar
