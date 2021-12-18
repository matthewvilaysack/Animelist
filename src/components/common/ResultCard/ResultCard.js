import React, { useContext } from 'react';
import Moment from 'react-moment';
import { GlobalContext } from '../../../context/GlobalState';
function ResultCard({ anime }) {
    const { addAnimeToWatchlist, addAnimeToWatched, watchlist, watched } = useContext(GlobalContext)
    //because of line 4, we now have access to the addtomoviewatchlist method in the global context.

    //do not allow duplicates in watchlist
    let storedAnime = watchlist.find(o => {
        // o.id === anime.mal_id
    });
    let storedAnimeWatched = watched.find(o => o.id === anime.mal_id)
    const watchlistDisabled = storedAnime
        ? true
        : storedAnimeWatched
            ? true
            : false;

    const watchedDisabled = storedAnimeWatched ? true : false;
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {anime.image_url ? (
                    <a href={anime.url}> <img src={anime.image_url}
                        alt={`${anime.title} Image`}
                    /></a>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{anime.title}</h3>
                    <h4 className="release-date">
                        <Moment format="YYYY">{anime.start_date}</Moment>
                    </h4>
                </div>
            </div>
            <div className="controls">

                <button className="btn"
                    disabled={watchlistDisabled}
                    onClick={(e) => {
                        console.log(watchlist);
                        addAnimeToWatchlist(anime)
                    }
                    }>
                    Add to Watchlist
                </button>

                <button className="btn"
                    disabled={watchedDisabled}
                    onClick={() => addAnimeToWatched(anime)}>
                    Add to Watched
                </button>
            </div>
        </div>
    )
}

export default ResultCard