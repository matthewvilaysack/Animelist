import React from 'react';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="inner-content">
				<div className="brand">
					<Link to="/">
						<h1>The<strong>Anime</strong>list</h1>
					</Link>
				</div>
				<ul className="nav-links">
					<li>
						<Link to="/">Watch List</Link>
					</li>

					<li>
						<Link to="/watched">Watched</Link>
					</li>

					<li>
						<Link to="/add" className="btn btn-main">
							+ Add
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header
