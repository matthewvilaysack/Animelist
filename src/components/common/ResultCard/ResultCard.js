import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
function ResultCard({ anime }) {
    const { addAnimeToWatchlist, addAnimeToWatched, watchlist, watched } = useContext(GlobalContext)
    //because of line 4, we now have access to the addtomoviewatchlist method in the global context.

    //do not allow duplicates in watchlist
    let storedAnime = watchlist.find(o => o.id === anime.id);
    let storeAnimeWatched = watched.find(o => o.id === anime.id)
    const watchlistDisabled =
        storedAnime
            ? true
            : storeAnimeWatched
                ? true
                : false;

    const watchedDisabled = storeAnimeWatched ? true : false;
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {anime.image_url ? (
                    <img src={anime.image_url}
                        alt={`${anime.title} Image`}
                    />
                ) : (
                    // !TODO THIS IS WHAT I NEED TO DO.
                    <div className="filler-poster"></div>
                )}
            </div>

                    //!TODO info section
            <div className="info">
                <div className="header">
                    <h3 className="title">{anime.title}</h3>
                    <h4 className="release-date">
                        {anime.start_date ? anime.start_date.substring(0, 4) : '-'}
                    </h4>
                </div>
            </div>

            //!TODO add button
            <div className="controls">
                //*want adding to be in the global state
                <button className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => addAnimeToWatchlist(anime)}>
                    Add to Watchlist
                </button>

                <button className="btn"
                    disabled={watchedDisabled}
                    onClick={() => addAnimeToWatched(anime)}>
                    Add to watched
                </button>
            </div>
        </div>
    )
}

export default ResultCard