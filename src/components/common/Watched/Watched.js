import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import AnimeCard from '../AnimeCard'
function Watched() {
    const { watched } = useContext(GlobalContext);
    return (
        <div className="anime-page">
            <div className="anime-page__container">
                <div className="header">
                    <h1 className="heading">Watched Anime</h1>

                    <span className="count-pill">
                        {watched.length} anime
                    </span>
                </div>

                {watched.length > 0 ? (
                    <div className="anime-grid">
                        {watched.map((anime) => (
                            <AnimeCard anime={anime} key={anime.id} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-anime">No anime in your list! Go add some!</h2>
                )}
            </div>
        </div>
    )
}

export default Watched
