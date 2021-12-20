import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import AnimeCard from '../AnimeCard'

function Watchlist() {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="anime-page">
            <div className="anime-page__container">
                <div className="header">
                    <h1 className="heading">Watch List Anime</h1>

                    <span className="count-pill">
                        {watchlist.length} anime
                    </span>
                </div>

                {watchlist.length > 0 ? (
                    <div className="anime-grid">
                        {watchlist.map((anime) => (
                            <AnimeCard anime={anime} key={anime.mal_id} type="watchlist" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-anime">No anime in your watch list, add some!</h2>
                )}
            </div>
        </div>
    )
}

export default Watchlist
