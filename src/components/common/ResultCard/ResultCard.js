import React, { useContext } from 'react';
import Moment from 'react-moment';
import { GlobalContext } from '../../../context/GlobalState';

//generates the resultcard in the add tab
function ResultCard({ anime }) {
    const { addAnimeToWatchlist, addAnimeToWatched, watchlist, watched } = useContext(GlobalContext)

    //add and handle duplicates in watchlist and watched
    let storedAnime = watchlist.find(o => o.mal_id === anime.mal_id);
    let storeAnimeWatched = watched.find(o => o.mal_id === anime.mal_id)
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
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
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