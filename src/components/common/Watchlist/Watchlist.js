import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';

import AnimeCard from '../AnimeCard'


function Watchlist() {
    const { watchlist } = useContext(GlobalContext)
    return (
        <div className="anime-page">
            <div className="anime-page__container">
                <div className="anime-page__header">
                    <h1 className="heading">Watchlist</h1>

                    <span className="count-pill">
                        {watchlist.length} anime
                    </span>
                </div>

                {watchlist.length > 0 ? (
                    <div className="anime-grid">
                        {watchlist.map((anime) => {
                            <AnimeCard anime={anime} key={anime.id} type="watchlist" />
                        })}
                    </div>
                ) : (
                    <div className="no-anime">No anime in your list! Go add some!</div>
                )}
            </div>
        </div>
    )
}

export default Watchlist
